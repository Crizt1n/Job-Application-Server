// import mongoose

const mongoose = require('mongoose')

//connection string of mongoDB

const connectionString = process.env.DATABASE

//connect to mongoDB using mongoose
mongoose.connect(connectionString).then(()=>{
    console.log('MongoDB Connected Successfully');
}).catch((err)=>{
    console.log('MongoDB Connection Failed due to : ',err);
})