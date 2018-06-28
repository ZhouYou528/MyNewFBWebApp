const express = require('express');
const router = express.Router();
const Friendship = require('../models/friendship');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');


router.post('/add', verifyToken, (req, res) => {
    if (false) {
        //check message
    } else {
        User.findById(req.userId, (err, user) =>{
            if(err) throw err;
            if(!user){
                return res.json({success: false, msg:'User not found'});
            } else {
                let friendship1 = new Friendship({
                    _id: new mongoose.Types.ObjectId(),
                    userOne: user.username,
                    userTwo: req.body.userTwo,
                    createdAt: req.body.createdAt
                });
                friendship1.save((err, newFriendship) => {
                    if (err) {
                        console.log(err)
                        res.json({success: false})
                    } else {
                        console.log("Success!")
                    }
                 });
                let friendship2 = new Friendship({
                    _id: new mongoose.Types.ObjectId(),
                    userOne: req.body.userTwo,
                    userTwo: user.username,
                    createdAt: req.body.createdAt
                });
                friendship2.save((err, newFriendship) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json({success: true})
                    }
                });
            }
        })
        
    }
});

router.get('/get-all-friends', verifyToken, (req, res) => {
    User.findById(req.userId, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
        } else {
            let username = user.username;
            Friendship.find({
                userOne: username,
            }, (err, allFriends) => {
                if(err) {
                    res.json({success: false, message: err})
                } else {
                    
                    res.json({success: true, message: allFriends})
                }
            }).sort({_id: -1});
        }
    })
});

router.delete('/delete-friend/:friendname', verifyToken, (req, res) => {
    User.findById(req.userId, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
        } else {
            let username = user.username;
            Friendship.deleteMany({
                userOne: username,
                userTwo: req.params.friendname
            }, (err) => {
                if(err) {
                    // res.json({success: false, message: err})
                } else {
                    // res.json({success: true, message: "Friend deleted!"})
                }
            });
            Friendship.deleteMany({
                userOne: req.params.friendname,
                userTwo: username
            }, (err) => {
                if(err) {
                    res.json({success: false, message: err})
                } else {  
                    res.json({success: true, message: "Friend deleted!"})
                }
            });
        }
    })
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