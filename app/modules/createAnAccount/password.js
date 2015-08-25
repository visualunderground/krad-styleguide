/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type: 'Create an account',
            title: 'Create a password',
            progress: 'Step 5 of 6'
        },

        CONTEXT_PASSWORD: {
            legend: 'Your password',
            isLegendHidden: true,
            EL_ROW: [
                {
                    EL_CRITERIA: {
                        name: 'password-criteria-scope',
                        text: 'Your password must have:'
                    }
                },
                {
                    name: 'password',
                    Question: {text: 'Create a password'},
                    EL_INPUT: {type: 'password'}
                },
                {
                    name: 'passwordConfirm',
                    Question: {text: 'Re-type your password'},
                    EL_INPUT: {type: 'password'}
                }
            ]
        },
        
        ContentNavigation : [
            {
                primary: {link : 'Continue', isInput : true},
                secondary: {link : 'Back', href: '/create-an-account/security-two'}
                
            }
        ]
    };
}(this, module));
