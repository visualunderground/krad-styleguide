/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type: 'Examples',
            title : 'System messages'
        },
        
        CONTEXT_STANDARD: {
            EL_MESSAGE : {
                html : '<p>It can take up to 5 days for your MOT testing service PIN to be sent by post.</p>'
            }

        },

        CONTEXT_STANDARD_HEADER: {
            EL_MESSAGE : {
                heading: 'Please note',
                html : '<p>You must sign out for changes to take effect.</p>'
            }

        },

        CONTEXT_SUCCESS: {
            EL_MESSAGE : [
                {
                    mod : 'success',
                    html : '<p>Your account has been successfully updated.</p>'
                },
                {
                    mod : 'success',
                    html : '<p>The role of <strong>AEDM</strong> has been successfully assigned to <strong>Bob Bobbingdon</strong>.</p>'
                },
                {
                    mod : 'success',
                    html : '<p>Question one is <strong>correct</strong>.</p>'
                }
            ]

        },

        CONTEXT_SUCCESS_HEADER: {
            EL_MESSAGE : {
                heading: 'Short heading',
                mod : 'success',
                html : '<p>The message html should expand upon the message giving more detail.</p>'
            }
        },

        CONTEXT_FAILURE: {
            EL_MESSAGE : [
                {
                    mod : 'failure',
                    html : '<p>This vehicle is currently under test.</p>'
                },
                {
                    mod : 'failure',
                    html : '<p>The AE <strong>City and Guilds</strong> has no slots available for testing.</p>'
                }
            ]
        },

        CONTEXT_FAILURE_HEADER: {
            EL_MESSAGE : {
                heading: 'No vehicles found',
                mod : 'failure',
                html : '<p>No vehicles were found with the registration number <strong>MT59 ABS</strong>.</p><p>Try searching again using the VIN from the VIN plate not the one found in the windscreen.</p>'
            }
        },

        CONTEXT_IMPORTANT: {
            EL_MESSAGE : {
                mod : 'important',
                html : '<p>By submitting this information you agree that it is correct.</p>'
            }
        },

        CONTEXT_IMPORTANT_HEADER: {
            EL_MESSAGE : {
                heading: 'Please check the details',
                mod : 'important',
                html : '<p>Submitting this information will update the vehicle\'s Technical Record.</p>'
            }
        },

        ContentNavigation : [
            {
                secondary: {link: 'Return home', href: '/'}
                
            }
        ]
    };
}(this, module));
