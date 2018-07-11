const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Post = require('../models/post');
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