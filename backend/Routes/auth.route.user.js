const express = require('express');
const router = express.Router();

// Validate datas send from the client to the server
const { body } = require('express-validator');

const User = require('../Models/user.js');

const authController = require('../Controllers/auth.controller.user.js');

router.post('/signup', [
    // Methods: trim() = remove unnecessary spaces, not().isEmpty() = check if its not empty
    body('username').trim().not().isEmpty(),
    // Methods: trim() = remove unnecessary spaces, isLength() = A minimum of 7 characters and a max of 13 characters
    body('password').trim().isLength({ min: 7 }),
    // Methods: isEmail() = check if format is correct '@gmail.com', withMessage() = if an error occurs, the msg will be printed
    body('email').isEmail().withMessage('Please enter a valid or different email.'),
    // Fixes wrong uppercase input (ex: @GMail.com will turn into @gmail.com)
    body('userPicture').trim().not().isEmpty()

    .normalizeEmail()

    .custom(async (email) => {
        // retrieves email from User model, where we query all the emails to validate if the email exists 
        const user = await User.find(email);
        // if the query results into more than 0, it means the email is already existing.
        if(user[0].length > 0){
            return Promise.reject('Email is already registered.');
        }
    })
    
], authController.signUp);

router.post('/login', authController.login);

module.exports = router;