/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type: 'Create an account',
            title: 'Account summary',
            progress: 'Step 6 of 6'
        },
        
        ContentNavigation : [
            {
                primary: {link : 'Create your account', isInput : true},
                secondary: {link : 'Back', href: '/create-an-account/password'}
                
            }
        ]
    };
}(this, module));
