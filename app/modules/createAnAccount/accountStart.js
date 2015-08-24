/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            title : 'Create an account'
        },
        
        ContentNavigation : [
            {
                primary: {link: 'Continue', href: '/create-an-account/name'},
                secondary: {link: 'Cancel and return to sign in', href: '/sign-in'}
                
            }
        ]
    };
}(this, module));
