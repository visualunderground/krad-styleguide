/*jslint browser: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global module */
'use strict';

module.exports = {
    bind : function (app, styleguide) {
    
        app.get('/examples/typography', function (req, res) {
            res.render('examples/typography', styleguide.getData('examples/typography'));
        });

        app.get('/examples/breadcrumbs', function (req, res) {
            res.render('examples/breadcrumbs', styleguide.getData('examples/breadcrumbs'));
        });

        app.get('/examples/content-header', function (req, res) {
            res.render('examples/content-header', styleguide.getData('examples/content-header'));
        });

        app.get('/examples/form-inputs', function (req, res) {
            res.render('examples/form-inputs', styleguide.getData('examples/form-inputs'));
        });

        app.get('/examples/layout', function (req, res) {
            res.render('examples/layout', styleguide.getData('examples/layout'));
        });

        app.get('/examples/form-inputs-error', function (req, res) {
            res.render('examples/form-inputs', styleguide.getData('examples/form-inputs-error'));
        });

        app.get('/examples/system-messages', function (req, res) {
            res.render('examples/system-messages', styleguide.getData('examples/system-messages'));
        });

        app.get('/examples/pagination', function (req, res) {
            res.render('examples/pagination', styleguide.getData('examples/pagination'));
        });

        app.get('/examples/filtered-data', function (req, res) {
            res.render('examples/filtered-data', styleguide.getData('examples/filtered-data'));
        });

        app.get('/examples/search', function (req, res) {
            res.render('examples/search', styleguide.getData('examples/search'));
        });
    }
};
