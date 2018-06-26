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
            status: req.body.status
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