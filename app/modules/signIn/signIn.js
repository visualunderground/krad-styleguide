/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            title : 'MOT testing service'
        },
        
        CONTEXT_FORM: {
            legend: 'Sign in',
            EL_ROW: [
                {
                    name: 'userid',
                    Question: {text: 'User ID'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    name: 'password',
                    Question: {text: 'Password'},
                    EL_INPUT: {type: 'password'}
                }
            ]
        },

        ContentNavigation : [
            {
                primary: {link : 'Sign in', isInput : true},
                secondary: {link : 'Forgotten password'}
                
            }
        ]
    };
}(this, module));
