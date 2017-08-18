'use strict'

var fs = require('fs')
var marked = require('marked')
var path = require('path')
var directoryTree = require('directory-tree')

// Dynamic navigation
var tree = directoryTree('./app/docs', {extensions: /\.md/})
// Loop through directories
for (var child in tree.children) {
  // Loop through files
  for (var grandChild in tree.children[child].children) {
    // Remove file extension from name
    tree.children[child].children[grandChild].name = tree.children[child].children[grandChild].name.split('.')[0]
    // Remove file extension and 'app' from path
    tree.children[child].children[grandChild].path = tree.children[child].children[grandChild].path.substr(3).split('.')[0]
  }
}

module.exports = {
  bind: function (app, styleguide) {
    app.get('/docs/publishing-on-heroku', function (req, res) {
      var doc = fs.readFileSync(path.join(__dirname, '/publishing-on-heroku.md'), 'utf8')
      var html = marked(doc)
      res.render('foo', {'document': html, assetPath: '/public/'})
    })

    // Dynamic routing
    app.get('/docs/:topic/:page', function (req, res) {
      var doc
      var html

      try {
        doc = fs.readFileSync(path.join(__dirname, '/' + req.params.topic + '/' + req.params.page + '.md'), 'utf8')
      } catch (err) {
        if (err.code === 'ENOENT') {
          res.send('File not found!')
        } else {
          throw err
        }
      }

      html = marked(doc)
      res.render('docs', {document: html, navigation: tree, assetPath: '/public/'})
    })
  }
}
