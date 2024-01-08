// path to resolve the client request

//1) import express
const express = require('express')

// import controller
const userController = require('../controllers/userController')

// import applicationController
const applicationController = require('../controllers/applicationController')

//import jwtMiddleware
const jwtMiddleware = require('../Middleware/jwtMiddleware')

//2) create an object for the class Router in express
const router = new express.Router()

//3) Logic/ path for resolving the request
    //syntax - router.httprequest('path to resolve request',()=>{how to resolve the request//controller})
    //a) Register
    router.post('/users/register',userController.register)

    //b) Login
    router.post('/users/login',userController.login)

    //c) Add Details
    router.post('/applications/add',jwtMiddleware,applicationController.addApplication)

    //get user Project
    router.get('/users/all-applications',jwtMiddleware,applicationController.getUserApplication)

    //edit application 
    router.put('/applications/edit/:id',jwtMiddleware,applicationController.editUserApplication)

    //delete List
    router.delete('/applications/remove/:id',jwtMiddleware,applicationController.deleteUserApplication)
    
//4) Export Router
module.exports = router