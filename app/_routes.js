'use strict'

module.exports = {
  bind: function (app) {
    app.get('/robots.txt', function (req, res) {
      res.type('text/plain')
      res.send('User-agent: *\nDisallow: /')
    })
  }
}
