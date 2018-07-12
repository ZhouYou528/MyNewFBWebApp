const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    body: { type: String, required: true },
    createdBy: { type: String },
    createdByAvatar: { type: String },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { type: Array },
    comments: [{
        comment: { type: String },
        commentator: { type: String }
    }],
    img: { type: String }
});

module.exports = mongoose.model('Post', postSchema);