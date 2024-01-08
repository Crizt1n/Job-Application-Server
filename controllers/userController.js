//import model
const users = require('../Models/userSchema')

//import jwt
const jwt = require('jsonwebtoken')

// logic for register
exports.register = async(req,res)=>{
    //logic

    console.log('Inside User Controller Register Logic');

    //destructuring data from the client request body(since json format is converted into javascript object by .json() method used in index.js file)
    const {username,email,password} = req.body


    try{//since email is the unique value we are checking that email is already present in the database 
    //for that we are using findOne method which return entire document when the condition  is true else return null
            const existingUser = await users.findOne({email})
            if(existingUser){

                //if findOne returns document it means that the user already exists
                //so we are sending a response in the 400 series(client request error)

                res.status(406).json('Account already exists... Please Login..!!')
            }
            else{
                
                //if findOne returns null , it means the email or the user doesn't exist in the database
                // we register the user
                        //1)Create an object for the model
                        const newUser = new users({
                            username,
                            email,
                            password
                        })
                        //2)To add the above object use save() method in mongoose
                        await newUser.save()

                //response
                res.status(200).json(newUser)
            }
        } //javascript resolve runtime error using try-catch block
        catch(err){
            res.status(401).json('Register Request Failed due to ', err)
        }

   
}

//logic for login
exports.login = async(req,res)=>{
    console.log('Inside Login User Controller');

    const {email, password} = req.body

    try{const existingUser =  await users.findOne({email,password})

        if(existingUser){
            //sign is the method/function used to create token
            //first argument is payload - the information that is secretly transmitted
            //second arg - secret key - based on which the token is generated.
            const token = jwt.sign({userId:existingUser._id},"supersecretkey12345")

            res.status(200).json({

                existingUser,
                token
            })
        }
        else{
            res.status(406).json('Invalid email ID or password')

        }
    }catch(err){
        res.status(401).json('Login Request Failed due to :',err)
    }
}