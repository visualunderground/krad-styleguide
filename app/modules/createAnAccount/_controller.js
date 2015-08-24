/*jslint browser: true, evil: true, plusplus: true, white: true, indent: 4, nomen: true */
/*global require, __dirname, process, console */
'use strict';
var appConfig = require(__dirname + '/../../appConfig.js').AppConfig;
var sendgrid  = require('sendgrid')(appConfig.getSendGridAPIKey());

(function(globals) {

    var CreateAnAccountController = function CreateAnAccountController(req, res, styleguide) {
        this.req = req;
        this.res = res;
        this.styleguide = styleguide;
    };

    CreateAnAccountController.prototype.newAction = function newAction() {
        // Kill session
        this.req.session = null;
        // Redirect
        this.res.redirect('/create-an-account/start');
    };

    CreateAnAccountController.prototype.startAction = function startAction() {
        this.view = 'createAnAccount/accountStart';
        this.data = 'createAnAccount/accountStart';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.nameAction = function nameAction() {
        this.view = 'createAnAccount/name';
        this.data = 'createAnAccount/name';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        
        // Manipulate data based on session values
        viewData.CONTEXT_NAME.EL_ROW[0] = this.manipulateViewData( 'firstName', 'EL_INPUT', viewData.CONTEXT_NAME.EL_ROW[0]);
        viewData.CONTEXT_NAME.EL_ROW[1] = this.manipulateViewData( 'middleName', 'EL_INPUT', viewData.CONTEXT_NAME.EL_ROW[1]);
        viewData.CONTEXT_NAME.EL_ROW[2] = this.manipulateViewData( 'lastName', 'EL_INPUT', viewData.CONTEXT_NAME.EL_ROW[2]);
        viewData.CONTEXT_EMAIL.EL_ROW[0] = this.manipulateViewData( 'emailAddress', 'EL_INPUT', viewData.CONTEXT_EMAIL.EL_ROW[0]);
        viewData.CONTEXT_EMAIL.EL_ROW[1] = this.manipulateViewData( 'confirmEmailAddress', 'EL_INPUT', viewData.CONTEXT_EMAIL.EL_ROW[1]);
        
        // console.log(JSON.stringify(viewData));
        // this.res.send(this.req.session);
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.handleNameAction = function handleNameAction() {
        var validation = {};
        // Collect post
        var userFirstName = this.req.body.firstName;
        var userMiddleName = this.req.body.middleName;
        var userLastName = this.req.body.lastName;
        var userEmail = this.req.body.emailAddress;
        var userConfirmEmail = this.req.body.confirmEmailAddress;
        // Save to session
        this.req.session.firstName = userFirstName;
        this.req.session.middleName = userMiddleName;
        this.req.session.lastName = userLastName;
        this.req.session.emailAddress = userEmail;
        this.req.session.confirmEmailAddress = userConfirmEmail;
        // Validate 
        if (userFirstName === '') {
            validation.firstName = 'you must enter a first name';
        }
        if (userLastName === '') {
            validation.lastName = 'you must enter a last name';
        }
        if (userEmail !== userConfirmEmail) {
            validation.confirmEmailAddress = 'the email addresses you have entered don\'t match';
        }
        if (userConfirmEmail === '') {
            validation.confirmEmailAddress = 'you must confirm your email address';
        }
        if (!(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(userEmail))) {
            validation.emailAddress = 'you must enter a valid email address';
        }
        // Redirect
        if (!isEmptyObject(validation)){
            this.res.redirect('/create-an-account/address');
        }else{
            this.req.session.validationMessages = validation;
            this.res.redirect('/create-an-account/name');
        }
    };

    CreateAnAccountController.prototype.addressAction = function addressAction() {
        this.view = 'createAnAccount/address';
        this.data = 'createAnAccount/address';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Manipulate data based on session values
        viewData.CONTEXT_ADDRESS.EL_ROW[0] = this.manipulateViewData( 'address1', 'EL_INPUT', viewData.CONTEXT_ADDRESS.EL_ROW[0]);
        viewData.CONTEXT_ADDRESS.EL_ROW[1] = this.manipulateViewData( 'address2', 'EL_INPUT', viewData.CONTEXT_ADDRESS.EL_ROW[1]);
        viewData.CONTEXT_ADDRESS.EL_ROW[2] = this.manipulateViewData( 'address3', 'EL_INPUT', viewData.CONTEXT_ADDRESS.EL_ROW[2]);
        viewData.CONTEXT_ADDRESS.EL_ROW[3] = this.manipulateViewData( 'address4', 'EL_INPUT', viewData.CONTEXT_ADDRESS.EL_ROW[3]);
        viewData.CONTEXT_ADDRESS.EL_ROW[4] = this.manipulateViewData( 'address5', 'EL_INPUT', viewData.CONTEXT_ADDRESS.EL_ROW[4]);
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.handleAddressAction = function handleAddressAction() {
        var validation = {};
        // Collect post
        var userAddress1 = this.req.body.address1;
        var userAddress2 = this.req.body.address2;
        var userAddress3 = this.req.body.address3;
        var userAddress4 = this.req.body.address4;
        var userAddress5 = this.req.body.address5;
        // Save to session
        this.req.session.address1 = userAddress1;
        this.req.session.address2 = userAddress2;
        this.req.session.address3 = userAddress3;
        this.req.session.address4 = userAddress4;
        this.req.session.address5 = userAddress5;
        // Validate
        if (userAddress1 === '') {
            validation.address1 = 'you must enter address line 1';
        }
        if (userAddress4 === '') {
            validation.address4 = 'you must enter a town or city';
        }
        if (userAddress5 === '') {
            validation.address5 = 'you must enter a postcode';
        }
        // Redirect
        if (!isEmptyObject(validation)){
            this.res.redirect('/create-an-account/security-one');
        } else {
            this.req.session.validationMessages = validation;
            this.res.redirect('/create-an-account/address');
        }
    };

    CreateAnAccountController.prototype.security1Action = function security1Action() {
        // this.res.send(this.req.session);
        this.view = 'createAnAccount/accountSecurity';
        this.data = 'createAnAccount/accountSecurityOne';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Manipulate data based on session values
        viewData.CONTEXT_SECURITY.EL_ROW[0] = this.manipulateViewData( 'question1', 'EL_SELECT', viewData.CONTEXT_SECURITY.EL_ROW[0]);
        viewData.CONTEXT_SECURITY.EL_ROW[1] = this.manipulateViewData( 'answer1', 'EL_INPUT', viewData.CONTEXT_SECURITY.EL_ROW[1]);
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.handleSecurity1Action = function handleSecurity1Action() {
        var validation = {};
        // Collect post
        var userQuestion1 = this.req.body.question1;
        var userAnswer1 = this.req.body.answer1;
        // Save to session
        this.req.session.question1 = userQuestion1;
        this.req.session.answer1 = userAnswer1;
        // Validate
        if (userQuestion1 === '') {
            validation.question1 = 'you must choose a question';
        }
        if (userAnswer1 === '') {
            validation.answer1 = 'you must enter a memorable answer';
        }
        // Redirect
        if (!isEmptyObject(validation)){
            this.res.redirect('/create-an-account/security-two');
        } else {
            this.req.session.validationMessages = validation;
            this.res.redirect('/create-an-account/security-one');
        }
    };

    CreateAnAccountController.prototype.security2Action = function security2Action() {
        this.view = 'createAnAccount/accountSecurity';
        this.data = 'createAnAccount/accountSecurityTwo';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Manipulate data based on session values
        viewData.CONTEXT_SECURITY.EL_ROW[0] = this.manipulateViewData( 'question2', 'EL_SELECT', viewData.CONTEXT_SECURITY.EL_ROW[0]); 
        viewData.CONTEXT_SECURITY.EL_ROW[1] = this.manipulateViewData( 'answer2', 'EL_INPUT', viewData.CONTEXT_SECURITY.EL_ROW[1]);
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.handleSecurity2Action = function handleSecurity2Action() {
        var validation = {};
        // Collect post
        var userQuestion2 = this.req.body.question2;
        var userAnswer2 = this.req.body.answer2;
        // Save to session
        this.req.session.question2 = userQuestion2;
        this.req.session.answer2 = userAnswer2;
        // Validate
        if (userQuestion2 === '') {
            validation.question2 = 'you must choose a question';
        }
        if (userAnswer2 === '') {
            validation.answer2 = 'you must enter a memorable answer';
        }
        // Redirect
        if (!isEmptyObject(validation)){
            this.res.redirect('/create-an-account/password');
        } else {
            this.req.session.validationMessages = validation;
            this.res.redirect('/create-an-account/security-two');
        }
    };

    CreateAnAccountController.prototype.passwordAction = function passwordAction() {
        this.view = 'createAnAccount/password';
        this.data = 'createAnAccount/password';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Manipulate data based on session values
        viewData.password = this.req.session.password;
        if (this.req.session.validationMessages && typeof(this.req.session.validationMessages.password) !== 'undefined') {
            viewData.passwordValidation = this.req.session.validationMessages.password;
            this.req.session.validationMessages.password = null;
        }
        viewData.passwordConfirm = this.req.session.passwordConfirm;
        if (this.req.session.validationMessages && typeof(this.req.session.validationMessages.passwordConfirm) !== 'undefined') {
            viewData.passwordConfirmValidation = this.req.session.validationMessages.passwordConfirm;
            this.req.session.validationMessages.passwordConfirm = null;
        }
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.handlePasswordAction = function handlePasswordAction() {
        var validation = {};
        // Collect post
        var userPassword = this.req.body.password;
        var userPasswordConfirm = this.req.body.passwordConfirm;
        // Save to session
        this.req.session.password = userPassword;
        this.req.session.passwordConfirm = userPasswordConfirm;
        // Validate
        if (!(/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(userPassword))) {
            validation.password = 'must contain both upper and lower case letters';
        }
        if (!(/[0-9]/.test(userPassword))) {
            validation.password = 'must contain 1, or more, numbers';
        }
        if (userPassword.length < 8 ){
            validation.password = 'must be 8, or more, characters long';
        }
        if (userPassword === '') {
            validation.password = 'you must enter a password';
        }
        if (userPassword !== userPasswordConfirm) {
            validation.passwordConfirm = 'the passwords you have entered don\'t match';
        }
        if (userPasswordConfirm === '') {
            validation.passwordConfirm = 'you must re-type your password';
        }
        // Redirect
        if (!isEmptyObject(validation)){
            this.res.redirect('/create-an-account/summary');
        } else {
            this.req.session.validationMessages = validation;
            this.res.redirect('/create-an-account/password');
        }
    };

    CreateAnAccountController.prototype.summaryAction = function summaryAction() {
        this.view = 'createAnAccount/accountSummary';
        this.data = 'createAnAccount/summary';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Manipulate data based on session values
        var salutation = this.req.session.firstName + ' ' + this.req.session.middleName + ' ' + this.req.session.lastName;
        var displayAddress = this.req.session.address1 + '<br />' + this.req.session.address2 + '<br />' + this.req.session.address3 + '<br />' + this.req.session.address4 + '<br />' + this.req.session.address5;
       
        function hash(val){
            if (typeof(val) !== 'undefined'){
                return val.replace(/./g, '•');
            }
            return val;
        }
        viewData.question1 = this.req.session.question1;
        viewData.answer1 = hash(this.req.session.answer1);
        viewData.question2 = this.req.session.question2;
        viewData.answer2 = hash(this.req.session.answer2);
        viewData.password = hash(this.req.session.password);
        viewData.emailAddress = this.req.session.emailAddress;
        viewData.salutation = salutation.replace('  ', ' ');
        viewData.displayAddress = displayAddress;
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.handleSummaryAction = function handleSummaryAction() {
        var fs = require('fs');
        var isSent = true;
        var firstname = this.req.session.firstName || 'User';
        var lastName = this.req.session.lastName || 'Temp';
        var userID = lastName.substring(0,4).toUpperCase() + '0083';
        var htmlEmail = fs.readFileSync('./app/views/email/email_createAnAccount.html','utf8').replace('#FIRST_NAME', firstname).replace('#USER_ID', userID);
        var plaintextEmail = ''
            + 'Dear ' + firstname + ','
            + '\r\n\r\n'
            + 'You have successfully created your MOT testing service account.'
            + '\r\n\r\n'
            + 'Your User ID is ' + userID
            + '\r\n\r\n'
            + 'Your User ID is used to sign in to the MOT testing service.'
            + '\r\n'
            + 'We recommend that you save this email in case you forget your User ID.'
            + '\r\n'
            + 'To sign in to the MOT testing service you will to use your User ID and the password you entered when you created your account.'
            + '\r\n\r\n'
            + 'Sign in to the MOT testing service: https://mot-styleguide.herokuapp.com/sign-in'
            + '\r\n\r\n'
            + 'Driver and Vehicle Standards Agency';

        var payload   = {
            to      : this.req.session.emailAddress,
            from    : 'accounts@mot-testing-service.gov.uk',
            subject : 'MOT testing service account User ID',
            text    : plaintextEmail, 
            html    : htmlEmail
        };

        sendgrid.send(payload, function(err, json) {
            if (err) { 
                //console.error(err); 
                isSent = false;
            }
            //console.log(json);
        });

        // Redirect
        if(isSent === true) {
            this.res.redirect('/create-an-account/success');
        } else {
            this.res.redirect('/create-an-account/failure');
        }
    };

    CreateAnAccountController.prototype.successAction = function successAction() {
        this.view = 'createAnAccount/success';
        this.data = 'createAnAccount/success';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Manipulate data based on session values
        viewData.emailAddress = this.req.session.emailAddress;
        // Delete the session
        this.req.session = null;
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.failureAction = function failureAction() {
        this.view = 'createAnAccount/failure';
        this.data = 'createAnAccount/failure';
        var viewData = this.styleguide.getData(this.data, {'loggedOut' : true});
        // Manipulate data based on session values
        viewData.emailAddress = this.req.session.emailAddress;
        // Render the template
        this.res.render(this.view, viewData);
    };

    CreateAnAccountController.prototype.manipulateViewData = function manipulateViewData(property, type, o ) {

        if (this.req.session[property] !== '') {
            if (type === 'EL_SELECT'){
                var options = o[type].options;

                for (var p in options) {
                    if (options.hasOwnProperty(p)) {
                        if (this.req.session[property] === options[p].value){
                            options[p].isSelected = true;
                        }
                    }
                }
                o[type].options = options;
            }else{
                o[type].value = this.req.session[property];
            }
        }
        if (this.req.session.validationMessages && typeof(this.req.session.validationMessages[property]) !== 'undefined') {
            o.error = this.req.session.validationMessages[property];
            delete this.req.session.validationMessages[property];
        }
        return o;
    };

    function isEmptyObject(o) {
        for (var name in o) {
            if (o.hasOwnProperty(name)) {
                return true;
            }
        }
        return false;
    }

    globals.CreateAnAccountController = CreateAnAccountController;

}(this));
