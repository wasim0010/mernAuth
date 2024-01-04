const express = require('express');
const cors =require('cors')
const app = express()
const dotenv = require('dotenv')
const routes = require('./routes/router')
const dbconfig = require("./utills/db")
 dotenv.config()

//  databaseConnection
 dbconfig()

 //middleware
app.use(express.json())
app.use(cors())
app.use('/api', routes)


// app.get('/', (request, response) => {
//      response.send('hello')
// })
 

app.listen(process.env.PORT, () => {
    console.log(`Server is Listening on 3000`)
})

