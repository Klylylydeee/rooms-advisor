const { validationResult } = require('express-validator');
// Encrypted special code which is used to encrypt and decrypt within our backend
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../Models/user.js');

exports.signUp = async (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return 
    }

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userPicture = req.body.userPicture;


    try {
        // 12 is = to the times the bcrypt have reiterate applying the encrypted key
        const encryptedPassword = await bcrypt.hash(password, 12)
        const userDetails = {
            username: username,
            email: email,
            password: encryptedPassword,
            userPicture: userPicture
        }
        const result = await User.save(userDetails);
        res.status(201).json({
            message: 'User has been registered!'
        });
    } catch(error) {
        if(!error.statusCode) {
            error.status = 500
        } 
        // Middleware for catching errors, which is found in controller.errorStatus.js
        return next(error);
    }
}

exports.login = async (req, res, next) => {
    // The passed variables from the client side
    const accountUsername = req.body.username;
    const password = req.body.password;
    try {
        const username = await User.login(accountUsername);
        // If the username length is not equivalent to 1 then username does not exist
        if (username[0].length !== 1){
            const error = new Error('Username with this email could not be found.');
            error.statusCode = 401;
            throw error;
        }
        // Store the data results from the query to storedUser variable
        const storedUser = username[0][0];

        // Compare the input password from the client and the decrypted password from database
        const isEqual = await bcrypt.compare(password, storedUser.password);
        // If the password doesnt return a true boolean thus it throws it
        if(!isEqual){
            const error = new Error('Wrong password.');
            error.statusCode = 401;
            throw error;
        }
        // Create token from the storedUser variable which stores the datas from the query
        const token = jwt.sign({
            // payload data
            userId: storedUser.userId,
            username: storedUser.username,
            email: storedUser.email,
        }, 'secretfortoken',{  //secret or privatekey of the jwt
            expiresIn: '1h' //option of the token
        });
        
        res.status(200).json({
            token: token
        });

    } catch(err) {
        if(!err.statusCode) {
            err.status = 500
        } 
        next(err);
    }

}