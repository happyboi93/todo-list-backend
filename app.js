const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const connectDB = require('./db/connection')
// import todolistRoute
const router = require('./routes/todolistRoute')
const app = express()
// use express.json() to get data into jsn format
app.use(express.json())

// port
const PORT = process.env.PORT 

// import routes
app.use('/api/item', router)
// import cors to access network from any port


// Add port and connect server
const start = async ()=>{
  try {
    app.listen(PORT,()=> console.log(`server connected to port: ${PORT}`))
    await connectDB(process.env.DB_CONNECT) 
  } catch (e) {
    console.log(e)
  }
}
start();