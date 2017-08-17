'use strict'

var fs = require('fs')
var marked = require('marked')
var path = require('path')

module.exports = {
  bind: function (app, styleguide) {
    app.get('/docs/publishing-on-heroku', function (req, res) {
      var doc = fs.readFileSync(path.join(__dirname, '/publishing-on-heroku.md'), 'utf8')
      var html = marked(doc)
      res.render('foo', {'document': html, assetPath: '/public/'})
    })

    // Dynamic routing
    app.get('/docs/:topic/:page', function (req, res) {
      var doc, html
      try {
        doc = fs.readFileSync(path.join(__dirname, '/' + req.params.topic + '/' + req.params.page + '.md'), 'utf8')
      } catch (err) {
        if (err.code === 'ENOENT') {
          res.send('File not found!')
        } else {
          throw err;
        }
      }

      html = marked(doc)
      res.render('foo', {'document': html, assetPath: '/public/'})
    })
  }
}
