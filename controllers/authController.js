const User = require('../models/User');
const jwt = require('jsonwebtoken');

//Error Handlers
const errorHandlers = (error) => {
    console.log(error.message, error.code)
    let errs = { fullName: '',userName: '', email: '', telNumber: '', password: '', confirmPassword: ''}

//incorrect email 
if (error.message === 'incorrect email'){
    errs.email = 'Sorry, this email is not registered';
}

//incorrect password
if (error.message === 'incorrect password'){
    errs.password = 'Sorry, the password is incorrect';
}

//duplicate error code
if(error.code === 11000){
    errs.email = 'A user with the email already exists'
}
//Validation errors
if(error.message.includes('user validation failed')){
    (Object.values(error.errors)).forEach(({properties}) => {
        errs[properties.path] = properties.message;
    });
}
return errs;
}

//jwt - createToken function 
const maxAge = 3*24*60*60;
const createToken = (id) => {
    return jwt.sign({ id }, 'JWT_SECRET', {
        expiresIn: maxAge
    });
}


//Functions 
module.exports.signup_get = (req, res) => {
    res.render('signup');
}
module.exports.login_get = (req, res) => {
    res.render('login');
}
module.exports.signup_post = async (req, res) => {
    const { fullName, userName, email, telNumber, password, confirmPassword } = req.body;
    try {
        const user = await User.create({fullName, userName, email, telNumber, password, confirmPassword });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000 })
        res.status(200).json({user: user._id});
    } catch (error) {
        const errs = errorHandlers(error);
        res.status(400).json({message: 'User not created', errs})
    }    
}
module.exports.login_post = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000 })
        res.status(200).json({user: user._id}); 
    } catch (error) {
        const errs = errorHandlers(error)
        res.status(400).json({errs})
    }
}


