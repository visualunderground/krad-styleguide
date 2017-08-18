/* jslint browser: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/* global require, __dirname, process, console */
'use strict'

var express = require('express'),
  cookieParser = require('cookie-parser'),
  cookieSession = require('cookie-session'),
  bodyParser = require('body-parser'),
  routes = require(__dirname + '/_routes.js'),
  routesCreateAnAccount = require(__dirname + '/modules/createAnAccount/_routes.js'),
  routesExamples = require(__dirname + '/modules/examples/_routes.js'),
  routesSignIn = require(__dirname + '/modules/signIn/_routes.js'),
  routesDocumentation = require(__dirname + '/docs/documentation_routes.js'),
  app = express(),
  port = (process.env.PORT || 3008),
  styleguide = require(__dirname + '/_commonHelpers/styleguide.js').Styleguide,
  appConfig = require(__dirname + '/appConfig.js').AppConfig

styleguide.setOptions({ viewDir: __dirname, assetPath: '/public/' })

// HBS view engine
var hbs = require('express-hbs')
app.engine('html', hbs.express4({
  partialsDir: [__dirname + '/views/_partials', __dirname + '/views/_includes'],
  layoutsDir: __dirname + '/views/_layouts',
  defaultLayout: __dirname + '/views/_layouts/template.html',
  extname: '.html'
}))
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

// Authentication
// app.use(express.basicAuth(appConfig.getUsername(), appConfig.getPassword()));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())
app.use(cookieSession({
  secret: 'thisisareallysecretpassphraseytypething'
}))

// Middleware to serve static assets
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/'))

// routes
routes.bind(app, styleguide)
routesExamples.bind(app, styleguide)
routesCreateAnAccount.bind(app, styleguide)
routesSignIn.bind(app, styleguide)
routesDocumentation.bind(app, styleguide)

// start the app
app.listen(port)
console.log('')
console.log('Listening on port ' + port)
console.log('')
