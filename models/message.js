const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fromUser: {
        type:String,
        required: true
    },
    toUser: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Message', messageSchema);