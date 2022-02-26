const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    const token = req.cookies.jwt;
    //Checking if the web token exists

    if (token){
        jwt.verify(token, 'JWT_SECRET', (err, decodedToken)=>{
            if (err){
                console.log(err.message);
                res.redirect('/users/login')
            }else{
                console.log(decodedToken);
                next();
            }
        });
    }else{
        res.redirect('/login');
    }
}

module.exports = {auth};