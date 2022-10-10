const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const connectDB = () =>{
  return mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection Succesfull!"))
  .catch((error) => {
    console.log(error)
  })
}

module.exports = connectDB