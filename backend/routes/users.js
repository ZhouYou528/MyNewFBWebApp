const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
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
                        res.json({ success: true, message: 'Register Success!', token: 'JWT ' + token });
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
                            res.json({ success: true, message: 'Success!', token: 'JWT ' + token });
                        }
                    }
                }
            });
        }
    }
});

module.exports = router;
