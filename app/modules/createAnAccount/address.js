/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Create an account',
            title : 'Your address',
            progress: 'Step 2 of 6'
        },

        CONTEXT_ADDRESS: {
            legend: 'Your address',
            EL_ROW: [
                {
                    name: 'address1',
                    Question: {text: 'Home address'},
                    EL_INPUT: {type: 'text', isCompound: true}
                },
                {
                    name: 'address2',
                    mod: 'visuallyhidden',
                    Question: {text: 'Home address line 2'},
                    EL_INPUT: {type: 'text', isCompound: true}
                },
                {
                    name: 'address3',
                    mod: 'visuallyhidden',
                    Question: {text: 'Home address line 3'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    name: 'address4',
                    Question: {text: 'Town or city'},
                    EL_INPUT: {type: 'text', mod: '1-4'}
                },
                {
                    name: 'address5',
                    Question: {text: 'Postcode'},
                    EL_INPUT: {type: 'text', mod: '1-8'}
                }
            ]
        },

        ContentNavigation : [
            {
                primary: {link : 'Continue', isInput : true},
                secondary: {link : 'Back', 'href' : '/create-an-account/name'}
                
            }
        ]
    };
}(this, module));
