//import mongoose
const mongoose = require('mongoose')

//create schema
const applicationSchema = new mongoose.Schema({
    company:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

const applications = mongoose.model("applications",applicationSchema)

module.exports = applications