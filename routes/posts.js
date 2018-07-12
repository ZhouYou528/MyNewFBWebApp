const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Post = require('../models/post');
const User = require('../models/user');
const Friendship = require('../models/friendship');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 3
    }
});

router.post('/newPost', upload.single('img'), verifyToken, (req, res) => {
    if (!req.body.body) {
        res.json({ success: false, message: 'Post body is required!' });
    } else {
        if (!req.body.createdBy) {
            res.json({ success: false, message: 'Post creator is required!' });
        } else {
            if( typeof req.file !== 'undefined') {
                const post = new Post({
                    _id: new mongoose.Types.ObjectId(),
                    body: req.body.body,
                    createdBy: req.body.createdBy,
                    createdAt: req.body.createdAt,
                    img: req.file.path 
                });
    
                post.save((err) => {
                    if (err) {
                        if (err.errors) {
                            res.json({ success: false, message: err });
                        } else {
                            res.json({ success: false, message: err });
                        }
                    } else {
                        res.json({ success: true, message: 'Post saved successfully!' });
                    }
                });
            } else {
                const post = new Post({
                    _id: new mongoose.Types.ObjectId(),
                    body: req.body.body,
                    createdBy: req.body.createdBy,
                    createdAt: req.body.createdAt
                });
    
                post.save((err) => {
                    if (err) {
                        if (err.errors) {
                            res.json({ success: false, message: err });
                        } else {
                            res.json({ success: false, message: err });
                        }
                    } else {
                        res.json({ success: true, message: 'Post saved successfully!' });
                    }
                });
            }
           
        }
    }
});

router.get('/getAllPosts/:username', verifyToken, (req, res) => {
    User.find({ username: req.params.username }, (err, curUser) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            if (curUser.length === 0) {
                res.json({ success: false, message: 'username:' + req.params.username + 'does not exist' });
            } else if (curUser.length !== 1) {
                res.json({ success: false, message: 'multiple users are called(username): ' + req.params.username });
            } else { 
                let query = [{createdBy: req.params.username}];
                Friendship.find({
                    userOne: req.params.username,
                }, (err, allFriends) => {
                    if(err) {
                        res.json({success: false, message: err})
                    } else {
                        allFriends.forEach(element => {
                            // console.log(element)
                            query.push({createdBy: element.userTwo});
                        });
                        let finalQuery = { $or: query };
                        Post.find( finalQuery, (err, posts) => {
                            if (err) {
                                res.json({success: false, message: err});
                            } else {
                                if (!posts) {
                                    res.json({success: false, message: 'No posts found.'});
                                } else {
                                    res.json({success: true, posts: posts});
                                }
                            }
                        }).sort({'_id': -1});
                    }
                });
               
            }
        }
    })
});

router.delete('/deletePost/:id', verifyToken, (req, res) => { 
    if (!req.params.id) {
        res.json({success: false, message: 'No id provided'});
    } else {
        Post.findOne({_id: req.params.id}, (err, post) => {
            if (err) {
                res.json({success: false, message: 'Invalid id'});
            } else {
                if (!post) {
                    res.json({success: false, message: 'Post was not found'});
                } else {
                    post.remove((err) => {
                        if (err) {
                            res.json({success: false, message: err});
                        } else {
                            res.json({success: true, message: 'Post deleted successfully!'});
                        }
                    })
                }
            }
        });
    };
});

router.put('/likePostOrCancelLike/:username', verifyToken, (req,res) => {
    if (!req.body._id) {
        res.json({success: false, message: 'No id for post was provided'});
    } else {
        Post.findOne({_id: req.body._id}, (err, post) => { // check if post exists according to postid and get that post from db
            if (err) {
                res.json({success: false, message: 'Cannot find post using postid provided'});
            } else {
                User.findOne({username: req.params.username}, (err, user) => { // check if username is valid (exists in db)
                    if (err) {
                        res.json({success: false, message: 'Cannot find username using username provided'});
                    } else { 
                        if(post.likedBy.includes(req.params.username)){ // cancel like
                            var idx = post.likedBy.indexOf(req.params.username);
                            post.likedBy.splice(idx,1);
                            post.likes--;
                            post.save((err) => {
                                if (err) {
                                    res.json({success: false, message: err});
                                } else {
                                    res.json({success: true, message: 'cancel liked post'});
                                }
                            });
                        } else { // add like
                            post.likedBy.push(req.params.username);
                            post.likes++;
                            post.save((err) => {
                                if (err) {
                                    res.json({success: false, message: err});
                                } else {
                                    res.json({success: true, message: 'add liked post'});
                                }
                            });
                        }
                    }
                })
            }
        })
    }
})

router.put('/updateComment/:id', (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id,
        {
            $set: { comments: req.body.comments }
        },
        function (err, updatedPost) {
            if (err) {
                res.send("Failed updating the comment")
            } else {
                res.json(updatedPost);
            }
        });
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request!')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null' || token === null) {
        return res.status(401).send('Unauthorized request!')
        // res.json({message: 'failed'})
    }
    let payload = jwt.verify(token, process.env.JWT_KEY)
    if (!payload) {
        return res.status(401).send('Unauthorized request!')
    }
    req.userId = payload.subject
    next()
}

module.exports = router;