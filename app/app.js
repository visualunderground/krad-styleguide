'use strict'

var path = require("path")
var express = require('express')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')
var routes = require(path.join(__dirname, '/_routes.js'))
var routesDocumentation = require(path.join(__dirname, '/docs/documentation_routes.js'))
var app = express()
var port = (process.env.PORT || 3008)
var appConfig = require(path.join(__dirname, '/appConfig.js')).AppConfig

// HBS view engine
var hbs = require('express-hbs')
app.engine('html', hbs.express4({
  partialsDir: [
    path.join(__dirname, '/templates/_includes'),
    path.join(__dirname, '/templates/components')
  ],
  layoutsDir: path.join(__dirname, '/templates/_layouts'),
  defaultLayout: path.join(__dirname, '/templates/_layouts/template.html'),
  extname: '.html'
}))

app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/templates/views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cookieSession({
  secret: 'thisisareallysecretpassphraseytypething'
}))

// Middleware to serve static assets
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/'))

// routes
routes.bind(app)
routesDocumentation.bind(app)

// start the app
app.listen(port)
console.log('')
console.log('Listening on port ' + port)
console.log('')
