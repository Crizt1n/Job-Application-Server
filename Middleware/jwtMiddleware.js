
//import jwt


const jwt = require('jsonwebtoken') 

const jwtMiddleware = (req,res,next) =>{
    console.log('inside jwt Middleware');

    
    // Logic to extract the token from headers
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token);
    try {
        //first argument should be token and secnond argument should be secret key
        const jwtResponse = jwt.verify(token,"supersecretkey12345")
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()

    } catch (err) {
        res.status(401).json('Authorization Failed Please Login')
    }
    
}

module.exports = jwtMiddleware