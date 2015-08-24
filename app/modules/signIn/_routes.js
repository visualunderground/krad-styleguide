/*jslint browser: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global module */
'use strict';

module.exports = {
    bind : function (app, styleguide) {
        app.get('/sign-in', function (req, res) {
            console.log(styleguide.getData('signIn/signIn', {'loggedOut' : true}));
            res.render('signIn/signIn', styleguide.getData('signIn/signIn', {'loggedOut' : true}));
        });

        app.post('/sign-in', function (req, res) {
            res.render('signIn/signIn', styleguide.getData('signIn/signIn', {'loggedOut' : true}));
        });
    }
};
