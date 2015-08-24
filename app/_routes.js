/*jslint browser: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global module */
'use strict';

module.exports = {
    bind : function (app, styleguide) {
    
        app.get('/robots.txt', function (req, res) {
            res.type('text/plain');
            res.send('User-agent: *\nDisallow: /');
        });

        app.get('/', function (req, res) {
            res.render('mot/index', styleguide.getData('index', {'loggedOut' : true}));
        });
    }
};
