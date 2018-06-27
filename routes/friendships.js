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