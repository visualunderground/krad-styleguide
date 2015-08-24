/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Create an account',
            title : 'Your details',
            progress: 'Step 1 of 6'
        },
        
        CONTEXT_NAME: {
            legend: 'Your name',
            EL_ROW: [
                {
                    name: 'firstName',
                    Question: {text: 'First name'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    name: 'middleName',
                    Question: {text: 'Middle name (optional)'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    name: 'lastName',
                    Question: {text: 'Last name'},
                    EL_INPUT: {type: 'text'}
                }
            ]
        },

        CONTEXT_EMAIL: {
            legend: 'Your email address',
            EL_ROW: [
                {
                    name: 'emailAddress',
                    Question: {text: 'Email address', hint: 'Your User ID will be sent to this address'},
                    EL_INPUT: {type: 'email'}
                },
                {
                    name: 'confirmEmailAddress',
                    Question: {text: 'Re-type your email address'},
                    EL_INPUT: {type: 'email'}
                }
            ]
        },

        ContentNavigation : [
            {
                primary: {link : 'Continue', isInput : true},
                secondary: {link : 'Back', 'href' : '/create-an-account'}
                
            }
        ]
    };
}(this, module));
