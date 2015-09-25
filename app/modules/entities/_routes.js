/*jslint browser: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global module */
'use strict';

module.exports = {
    bind : function (app, styleguide) {
    
        app.get('/person', function (req, res) {
            res.render('entities/template', styleguide.getData('entities/person'));
        });

        app.get('/vts', function (req, res) {
            res.render('entities/template', styleguide.getData('entities/vts'));
        });
    }
};
