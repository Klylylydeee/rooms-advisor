const { validationResult } = require('express-validator');
// Encrypted special code which is used to encrypt and decrypt within our backend
const bcrypt = require('bcryptjs');

const User = require('../Models/user.js')

exports.signUp = async (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return 
    }

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {
        // 12 is = to the times the bcrypt have reiterate applying the encrypted key
        const encryptedPassword = await bcrypt.hash(password, 12)
        const userDetails = {
            username: username,
            email: email,
            password: encryptedPassword
        }
        const result = await User.save(userDetails);
        res.status(201).json({
            message: 'User has been registered!'
        });
    } catch(err) {
        if(!err.statusCode) {
            err.status = 500
        } 
        // Middleware for catching errors, which is found in controller.errorStatus.js
        next(err);
    }
}