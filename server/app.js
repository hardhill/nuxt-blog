const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./routs/auth.routs')
const keys = require('./keys')

mongoose.connect(keys.MONG_URI).then(() => {
    console.log('Mongoose connected')
}).catch(error=>console.log(error))


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

module.exports = app
