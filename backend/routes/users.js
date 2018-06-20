const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');


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
                user.save().then(result => {
                    console.log(result);
                    res.json({ message: 'Register Success!' });
                }).catch(err => console.log(err));
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
                            res.json({ message: 'Success!' });
                        }
                    }
                }
            });
        }
    }
});

module.exports = router;
