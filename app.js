const dotenv = require('dotenv')
const connectDB = require('./db/connect')
dotenv.config()

const express = require('express')
const app = express()

const sendEmail = require('./controllers/sendEmail')

// error handler
const notFoundMiddleware = require('./middleware/error-handler')
const errorHandlerMiddleware = require('./middleware/error-handler')

//routes
app.get('/', (req, res) =>{ 
  res.send('<h1>Email Proyect</h1><a href="/send">send email</a>')
})

app.get('/send', sendEmail)

//app.use

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
app.use(express.json())

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