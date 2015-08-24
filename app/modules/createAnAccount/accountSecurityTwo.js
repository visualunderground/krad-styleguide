/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Create an account',
            title : 'Second security question',
            progress: 'Step 4 of 6'
        },

        CONTEXT_SECURITY: {
            legend: 'Choose another question',
            EL_ROW: [
                {  
                    name: 'question2',
                    Question: {text: 'Select a question to answer'},
                    EL_SELECT: { 
                        options: [
                            {
                                value: 'Who was your childhood hero?', 
                                text : 'Who was your childhood hero?'
                            }, 
                            {
                                value: 'In what town was your first job?', 
                                text : 'In what town was your first job?'
                            },
                            {
                                value: 'What is your favourite team?',
                                text : 'What is your favourite team?' 
                            },
                            {   
                                value: 'What was your childhood nickname?',
                                text : 'What was your childhood nickname?'  
                            }
                        ]
                    }
                },
                {
                    name: 'answer2',
                    Question: {text: 'Your answer'},
                    EL_INPUT: {type: 'text', mod: '1-4'}
                }
            ]
        },

        ContentNavigation : [
            {
                primary: {link : 'Continue', isInput : true},
                secondary: {link : 'Back', href: '/create-an-account/security-one'}
                
            }
        ]
    };
}(this, module));
