const jwt = require('jsonwebtoken');

// Check if token is valid
module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    // If there is no authHeader, this statement will throw the whole function
    if(!authHeader){
        const error = new Error('Not Authenticated');
        error.statusCode = 401;
        throw error;
    }
    // An example of an authHeader is 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    // .split(' ') creates 2 string array in which Bearer is index 0 and eyJhbGciOi is index 1
    const token = authHeader.split(' ')[1];
    console.log(token)

    // Variable for storing the data from the token
    let decodedToken;

    try {
        // validating the token key from the encrypted token then passes the 
        // token payload data to decodedToken variable
        decodedToken = jwt.verify(token, 'secretfortoken') //secret or privatekey of the jwt, found in auth controller ln 70
    } catch (err){
        err.statusCode = 500;
        throw err;
    }

    // If the decoded token isn't approved by jwt due to wrong token, it throws the whole function
    if(!decodedToken){
        const error = new Error('Not Authenticated');
        error.statusCode = 401;
        throw error;
    }

    req.isLoggedIn = true;
    req.userId = decodedToken.userId;
    req.username = decodedToken.username;
    req.email = decodedToken.email;
    next();
};