const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//User Schema
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    nickname: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: Date
    },
    friends: {
        type: Array
    },
    avatar: {
        type: String,
    }
});

userSchema.pre('save', function(next){
    if (!this.isModified('password')){
        return next();
    }
    bcrypt.hash(this.password, null, null, (err, hash) => {
        if(err) return next(err);
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);