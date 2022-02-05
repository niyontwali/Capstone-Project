const mongoose = require('mongoose');
const {isEmail} = require ('validator');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your full name']
    },
    userName: {
        type: String,
        required: [true, 'Please enter a username']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    telNumber: {
        type: Number,
        required: [true, 'Please enter a tel number'],
        minlength: 10,
        maxlength: 10,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Please enter a minimum of 6 characters or more!']
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please re-enter a password'],
        minlength: [6, 'Please enter a minimum of 6 characters or more!']
    }

}); 

//fire a function after doc saved to db

// userSchema.post('save', function (doc, next) {
//     console.log('New user was created', this)
//     next();
// })

//fire a function before doc saved to db
userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
});
userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt)
    next()
});

const User = mongoose.model('user', userSchema);

module.exports = User; 