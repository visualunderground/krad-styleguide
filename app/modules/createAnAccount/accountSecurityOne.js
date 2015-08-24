/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Create an account',
            title : 'First security question',
            progress: 'Step 3 of 6'
        },

        showLede : true,

        CONTEXT_SECURITY: {
            legend: 'Choose a question',
            EL_ROW: [
                {  
                    name: 'question1',
                    Question: {text: 'Select a question to answer'},
                    EL_SELECT: { 
                        options: [
                            {
                                value: 'What was the name of your first pet?', 
                                text: 'What was the name of your first pet?'
                            }, 
                            {
                                value: 'What is your favourite colour?', 
                                text: 'What is your favourite colour?'
                            },
                            {
                                value: 'What is your mother\'s maiden name?',
                                text: 'What is your mother\'s maiden name?'
                            },
                            {   
                                value: 'What was the make and model of your first car?',
                                text: 'What was the make and model of your first car?'
                            }
                        ]
                    }
                },
                {
                    name: 'answer1',
                    Question: {text: 'Your answer'},
                    EL_INPUT: {type: 'text', mod: '1-4'}
                }
            ]
        },

        ContentNavigation : [
            {
                primary: {link : 'Continue', isInput : true},
                secondary: {link : 'Back', href: '/create-an-account/address'}
                
            }
        ]
    };
}(this, module));
