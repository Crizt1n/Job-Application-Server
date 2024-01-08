
//1) import .env 
//Loads .env file contents into process.env by default. 
require('dotenv').config()

//2) import express - to create server

const express = require('express')

//3) import cors 

const cors = require('cors')

//import router

const router = require('./Routes/router')

//import connection/mongoose file

require('./DB/connection')


//4) create server

const jobServer = express()

//5) use of cors by the server

jobServer.use(cors())

//6) returns middleware that only parses json & converts it into javascript object

jobServer.use(express.json())

/* //server use Middleware
jobServer.use(appMiddleware) */

//server use router
jobServer.use(router)

//7) customise the port why because by default runs at 3000

const PORT = 4000 || process.env.PORT

//8) run the server

jobServer.listen(PORT,()=>{
    console.log('SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ',PORT);
})

//9) GET http request to base url 

jobServer.get('/',(req,res)=>{
    res.send(`<h1>Job Applcation Server Running Successfully and waiting for the client request</h1>`)
})

/* //10) POST http request

jobServer.post('/',(req,res)=>{
    res.send('POST Request Recieved for Job Server')
}) */