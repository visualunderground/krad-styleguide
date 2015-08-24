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
        
        ContentNavigation : [
            {
                primary: {link : 'Continue', isInput : true},
                secondary: {link : 'Back', href: '/create-an-account/security-two'}
                
            }
        ]
    };
}(this, module));
