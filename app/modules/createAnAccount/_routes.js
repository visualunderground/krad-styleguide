/*jslint browser: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global module, __dirname, require */

'use strict';
var CreateAnAccountController = require(__dirname + '/_controller.js').CreateAnAccountController;

module.exports = {
  bind : function (app, styleguide) {

    app.get('/create-an-account', function (req, res) {
        var controller = new CreateAnAccountController(req, res, styleguide);
        controller.newAction();
    });

    app.get('/create-an-account/start', function (req, res) {
        var controller = new CreateAnAccountController(req, res, styleguide);
        controller.startAction();
    });

    app.route('/create-an-account/name')
        .get(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.nameAction();
        })
        .post(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.handleNameAction();
        });

    app.route('/create-an-account/address')
        .get(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.addressAction();
        })
        .post(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.handleAddressAction();
        });        

    app.route('/create-an-account/security-one')
        .get(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.security1Action();
        })
        .post(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.handleSecurity1Action();
        });

    app.route('/create-an-account/security-two')
        .get(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.security2Action();
        })
        .post(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.handleSecurity2Action();
        });

    app.route('/create-an-account/password')
        .get(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.passwordAction();
        })
        .post(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.handlePasswordAction();
        });

    app.route('/create-an-account/summary')
        .get(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.summaryAction();
        })
        .post(function (req, res) {
            var controller = new CreateAnAccountController(req, res, styleguide);
            controller.handleSummaryAction();
        });

    app.get('/create-an-account/success', function (req, res) {
        var controller = new CreateAnAccountController(req, res, styleguide);
        controller.successAction();
    });

    app.get('/create-an-account/failure', function (req, res) {
        var controller = new CreateAnAccountController(req, res, styleguide);
        controller.failureAction();
    });

  }
};
