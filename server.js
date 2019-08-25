const express = require('express')
const hbs = require('express-handlebars')

const tankRoutes = require('./routes/tank')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/', tankRoutes)

module.exports = server
