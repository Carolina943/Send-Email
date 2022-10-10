const dotenv = require('dotenv')
const connectDB = require('./db/connect')
dotenv.config()

const express = require('express')
const app = express()

//connectDB
const port = process.env.PORT || 3000

async function start(){
  try{
    await connectDB()
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  }catch(error){
    console.log(error)
  }
}

start()