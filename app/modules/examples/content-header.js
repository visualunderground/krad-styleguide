/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Examples',
            title : 'Content header'
        },

        CONTEXT_KEY: {
            ContentHeader: {
                type : 'Type',
                title : 'Title',
                tertiary: 'Tertiary',
                progress: 'Progress'
            },
        },

        CONTEXT_EXAMPLE1: {
            ContentHeader: {
                type : 'Your account',
                title : 'Bob Bobbingdon',
                tertiary: '57 Hawthornden Way, Clifton, Bristol, BS5 7NT'
            },
        },

        CONTEXT_EXAMPLE2: {
            ContentHeader: {
                type : 'Your account',
                title : 'Change your details'
            },
        },

        CONTEXT_EXAMPLE3: {
            ContentHeader: {
                type : 'Vehicle Testing Station',
                title : 'Hendersons Garage',
                tertiary: '85 Vauxhall Cross, London, SE11 5LL'
            },
        },

        CONTEXT_EXAMPLE4: {
            ContentHeader: {
                type : 'Sign in',
                title : 'Claim account',
                tertiary: 'Tertiary',
                progress: 'Step 2 of 3'
            },
        },
        
        ContentNavigation : [
            {
                secondary : {link : 'Return home', href : '/'}
                
            }
        ]
    };
}(this, module));
