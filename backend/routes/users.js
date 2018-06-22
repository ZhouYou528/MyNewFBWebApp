const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const upload = multer({storage: storage})

//https://www.youtube.com/watch?v=CMDsTMV2AgI ==> For Improvement


router.post('/register', (req, res, next) =>{
    if(!req.body.username) {
        res.json({success: false, message: 'You must provide an username'});
    } else {
        if (!req.body.password) {
            res.json({success: false, message: 'You must provide a password'});
        } else {
            if (!req.body.email) {
                res.json({success: false, message: 'You must provide a email'});
            } else {
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    nickname: req.body.nickname,
                    gender: req.body.gender,
                    dob: req.body.dob,
                    friends: req.body.friends,
                    avatar: req.body.avatar
                });
                user.save((err, registeredUser) => {
                    if(err) {
                        if(err.code == 11000) {
                            res.json({success: false, message: 'Username or e-mail already exists'});
                        } else {
                            res.json({success: false, message: err});
                        }
                    } else {
                        console.log(registeredUser);
                        let payload = { subject: registeredUser._id }
                        console.log(process.env.JWT_KEY);
                        let token = jwt.sign(payload, process.env.JWT_KEY ,{
                            expiresIn: 3600
                        })
                        res.json({ success: true, message: 'Register Success!', token: token });
                    }
                });
            }
        }
    }
});

router.post('/login', (req, res) => {
    if (!req.body.username) {
        res.json({success: false, message: 'No username was provided.'})
    } else {
        if (!req.body.password) {
            res.json({success: false, message: 'No password was provided.'});
        } else {
            User.findOne({username: req.body.username}, (err, user) => {
                if(err) {
                    res.json({success: false, message: err});
                } else {
                    if (!user) {
                        res.json({success: false, message: 'Username not found.'});
                    } else {
                        const validPassword = user.comparePassword(req.body.password);
                        if (!validPassword) {
                            res.json({success: false, message: 'Invalid password.'});
                        } else {
                            let payload = { subject: user._id }
                            let token = jwt.sign(payload, process.env.JWT_KEY ,{
                                expiresIn: 3600
                            })
                            res.json({ success: true, message: 'Success!', token: token });
                        }
                    }
                }
            });
        }
    }
});

router.get('/getCurrentUser', verifyToken, (req, res, next) => {
    User.findById(req.userId, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
        }
        return res.json(user);
    })
});

router.put('/update-email/:id', verifyToken, (req, res, next) => {
    let query = { $set: { email: req.body.email } }
    User.findByIdAndUpdate(req.userId, query, function (err, updatedUser) {
        if (err) {
            return res.json({ success: false, msg: 'Failed to update email' });
        } else {
            res.json(updatedUser);
        }
    })
});

router.put('/update-password/:id', verifyToken, (req, res, next) => {
    bcrypt.hash(req.body.password, null, null, (err, hash) => {
        if (err) {
            return res.json({ success: false, msg: 'Failed to hash password' });
        } else {
            let query = { $set: { password: hash } };
            User.findByIdAndUpdate(req.userId, query, function (err, updatedUser) {
                if (err) {
                    return res.json({ success: false, msg: 'Failed to update password' });
                } else {
                    res.json(updatedUser);
                }
            })
        }
    });
});

router.put('/update-avatar/:id', verifyToken, upload.single('avatar'), (req, res, next) => {
    User.findByIdAndUpdate(req.userId,
    {
        $set:{ avatar: req.file.path }
    },
    function(err, updatedUser) {
        if(err) {
            res.send("Failed updating the friend")
        }else{
            res.json(updatedUser);
        }
    });
});

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request!')
    } 
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null' || token === null) {
        return res.status(401).send('Unauthorized request!')
        // res.json({message: 'failed'})
    }
    let payload = jwt.verify(token, process.env.JWT_KEY)
    if(!payload) {
        return res.status(401).send('Unauthorized request!')
    }
    req.userId = payload.subject
    next()
}


module.exports = router;
