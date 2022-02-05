const signup = (req, res) => {
        const user = req.body;
        const { password, email, firstName, lastName, confirm } = user;
        if (!email || !password || !firstName || !lastName || !confirm){
            return res.status(400).json({
                Error: 'Please enter all the fields i.e. first name, last name, email, password and confirm your password'
            }) 
        } 
        if (password !== confirm){
            return res.status(400).json({
                Error: 'Passwords must match'
            })
        }
        const userExists = users.find(u => u.email === email)
        if (userExists){
            return res.status(409).json({
                error: 'A user with the email exists!'
            })
        }
        
        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            email, 
            password
        }

        users.push(newUser);
        console.log(users)

        return res.status(201).json({
          message: "User created Successfully!",
          newUser
        });
} 

module.exports = signup;