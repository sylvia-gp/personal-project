const express = require('express')
const hbs = require('express-handlebars')

const tankRoutes = require('./routes/tank')
// const tankInfo = require('./routes/tankinfo')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', tankRoutes)
// server.use('/tank/:id', tankInfo)

module.exports = server
