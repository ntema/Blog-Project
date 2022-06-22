const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const ejs = require('ejs')
const path =require("path")
const port = process.env.PORT || 5000 ||8000 



const app = express()

//middlewares
app.use(express.static(path.join(__dirname,'public')))
app.set("views",path.join(__dirname,"views"))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))


app.use('/', require('./routes/getRoute'))
app.use('/create', require('./routes/postRoute'))

//server config
app.listen(port, () => {
    console.log(`server running on ${port}`)
})