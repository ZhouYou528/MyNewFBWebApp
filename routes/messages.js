const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Message = require('../models/message');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

router.post('/add', verifyToken, (req, res) => {
    if (false) {
        //check message
    } else {
        let message = new Message({
            _id: new mongoose.Types.ObjectId(),
            fromUser: req.body.fromUser,
            toUser: req.body.toUser,
            category: req.body.category,
            status: req.body.status,
            createdAt: req.body.createdAt
        });
        message.save((err, newMessage) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                res.json({ success: true, message: 'Send message Success!', cotent: newMessage });
            }
        });
    }
});

router.get('/get-all', verifyToken, (req, res) => {
    User.findById(req.userId, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
        } else {
            let username = user.username;
            Message.find({
                toUser: username,
                status: { $in: [0, 1, 3] }
            }, (err, allMessages) => {
                if(err) {
                    res.json({success: false, message: err})
                } else {
                    
                    res.json({success: true, message: allMessages})
                }
            }).sort({_id: -1, createdAt: 1});
        }
    })
});

router.put('/update-message/:id', verifyToken, (req, res, next) => {
    let query = { $set: { status: req.body.status } }
    Message.findByIdAndUpdate(req.params.id, query, function (err, updatedMessage) {
        if (err) {
            return res.json({ success: false, msg: 'Failed to update status!' });
        } else {
            res.json(updatedMessage);
        }
    })
});

router.delete('/delete-message/:id', verifyToken, (req, res, next) => {
    Message.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return res.json({ success: false, msg: 'Failed to update status!' });
        } else {
            res.json({ success: true });
        }
    })
});

router.get('/new-message-number/:username', verifyToken, (req, res, next) => {
    let query = {
        status: 1,
        toUser: req.params.username
    }
    Message.find(query, function (err, messages) {
        if (err) {
            console.log(err)
            return res.json({ success: false, msg: 'Failed to get new message number!' });
        } else {
            res.json({ success: true, number: messages.length });
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