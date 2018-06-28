const mongoose = require('mongoose');

const friendshipSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userOne: {
        type:String,
        required: true
    },
    userTwo: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now(),
        required: true
    }
});

friendshipSchema.index({ userOne: 1, userTwo: 1 }, { unique: true })

module.exports = mongoose.model('Friendship', friendshipSchema);