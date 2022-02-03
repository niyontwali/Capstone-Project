const users = require('../db/index');
const jwt = require('jsonwebtoken');
const login = (req, res) => {
        const user = req.body;
        const { password, email } = user;
        if (!email || !password){
            return res.status(400).json({
                Error: 'Enter your Email and Password'
            }) 
        }
        const userExistsInDB = users.find(u => u.email === email && u.password === password)
        if (!userExistsInDB){
            return res.status(401).json({
                error: 'Email or Password are incorrect!'
            })
        }
        
        const token = jwt.sign({
            email: userExistsInDB.email,
            id: userExistsInDB.id
        }, 'secrettoken', { expiresIn: '1hr' })
        
        res.cookie('token', token, {
            httpOnly: true  
        })
        
        return res.status(201).json({
          message: "User Successfully logged in!",
        });
        
} 

module.exports = login;  