const { validationResult } = require('express-validator');
// Encrypted special code which is used to encrypt and decrypt within our backend
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

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

exports.login = async (req, res, next) => {
    // The passed variables from the client side
    const accountUsername = req.body.username;
    const password = req.body.password;
    try {
        const username = await User.login(accountUsername);
        // Check if the username exist
        if (username[0].length !== 1){
            const error = new Error('A user with this email could not be found.');
            error.statusCode = 401;
            throw error;
        }
        const storedUser = username[0][0];
        // Compare the input password from the client and the decrypted password from database
        const isEqual = await bcrypt.compare(password, storedUser.password);

        if(!isEqual){
            const error = new Error('Wrong password.');
            error.statusCode = 401;
            throw error;
        }
        // Create token from the gathered data
        const token = jwt.sign({
            userId: storedUser.userId,
            username: storedUser.username,
            email: storedUser.email,
        }, 'secretfortoken',{
            expiresIn: '1h'
        });
        
        res.status(200).json({
            token: token, 
            userId: storedUser.userId,
            username: storedUser.username,
            email: storedUser.email
        });

    } catch(err) {
        if(!err.statusCode) {
            err.status = 500
        } 
        next(err);
    }

}