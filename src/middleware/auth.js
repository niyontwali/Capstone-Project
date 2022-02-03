const auth = (req, res, next) => {
    const {token} = req.cookies;
    try {
        if (!token){
            return res.status(401).json({
                error: 'Your not allowed to view the Blog Page, you need to first create an Account'
            });
        }
        const user = jwt.verify(token, 'secrettoken')
        req.user = user
    }
    catch (err) {
        req.clearCookie('token')
        return res.status(401).json({
            error: 'Your token has expired'
        })
    }
    
}

module.exports = auth;