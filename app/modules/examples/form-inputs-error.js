/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Examples',
            title : 'Form inputs in error state'
        },

        validationSummary: [
            {field: 'Cylinder capacity', error: 'you must enter a cylinder capacity'},
            {field: 'Manufacturer', error: 'you must choose a manufacturer'},
            {field: 'Registration mark', error: 'must be a valid registration mark'},
        ],
        
        CONTEXT_TEXT: {
            legend: '1. Text inputs',
            EL_ROW: [
                {
                    error: 'oops I did it again',
                    name: 'text1',
                    Question: {text: 'Standard text input'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text2',
                    Question: {text: 'Text input with a \'-3-4\' size modifier'},
                    EL_INPUT: {type: 'text', mod: '3-4'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text3',
                    Question: {text: 'Text input with a \'-1-2\' size modifier'},
                    EL_INPUT: {type: 'text', mod: '1-2'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text4',
                    Question: {text: 'Text input with a \'-1-4\' size modifier'},
                    EL_INPUT: {type: 'text', mod: '1-4'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text5',
                    Question: {text: 'Text input with a \'-1-8\' size modifier'},
                    EL_INPUT: {type: 'text', mod: '1-8'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text6',
                    Question: {text: 'Standard text input with hint text', hint: 'This question has supporting information'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text7',
                    Question: {text: 'Standard password input', hint: 'Passwords will accept the same modifiers as text inputs'},
                    EL_INPUT: {type: 'password'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text8',
                    Question: {text: 'Standard telephone input', hint: 'Telephone will accept the same modifiers as text inputs'},
                    EL_INPUT: {type: 'tel'}
                },
                {
                    error: 'oops I did it again',
                    name: 'text9',
                    Question: {text: 'Standard email input', hint: 'Email will accept the same modifiers as text inputs'},
                    EL_INPUT: {type: 'email'}
                }
            ]
        },

        CONTEXT_SELECT: {
            legend: '2. Select inputs',
            EL_ROW: [
                {  
                    error: 'oops I did it again',
                    name: 'select1',
                    Question: {text: 'Standard select input'},
                    EL_SELECT: { 
                        options: [
                            {value: '1', text: 'mobile'},
                            {value: '2', text: 'tablet'},
                            {value: '3', text: 'desktop'}
                        ]
                    }
                },
                {  
                    error: 'oops I did it again',
                    name: 'select2',
                    Question: {text: 'Select input with a \'-3-4\' size modifier'},
                    EL_SELECT: { 
                        mod: '3-4',
                        options: [
                            {value: '1', text: 'mobile'},
                            {value: '2', text: 'tablet'},
                            {value: '3', text: 'desktop'}
                        ]
                    }
                },
                {  
                    error: 'oops I did it again',
                    name: 'select3',
                    Question: {text: 'Select input with a \'-1-2\' size modifier'},
                    EL_SELECT: { 
                        mod: '1-2',
                        options: [
                            {value: '1', text: 'mobile'},
                            {value: '2', text: 'tablet'},
                            {value: '3', text: 'desktop'}
                        ]
                    }
                },
                {  
                    error: 'oops I did it again',
                    name: 'select4',
                    Question: {text: 'Select input with a \'-1-4\' size modifier'},
                    EL_SELECT: { 
                        mod: '1-4',
                        options: [
                            {value: '1', text: 'mobile'},
                            {value: '2', text: 'tablet'},
                            {value: '3', text: 'desktop'}
                        ]
                    }
                },
                {  
                    error: 'oops I did it again',
                    name: 'select5',
                    Question: {text: 'Select input with a \'-1-8\' size modifier'},
                    EL_SELECT: { 
                        mod: '1-8',
                        options: [
                            {value: '1', text: 'mobile'},
                            {value: '2', text: 'tablet'},
                            {value: '3', text: 'desktop'}
                        ]
                    }
                },
                {  
                    error: 'oops I did it again',
                    name: 'select6',
                    Question: {text: 'Standard select input with hint text', hint: 'This question has supporting information'},
                    EL_SELECT: { 
                        options: [
                            {value: '1', text: 'mobile'},
                            {value: '2', text: 'tablet'},
                            {value: '3', text: 'desktop'}
                        ]
                    }
                }
            ]
        },

        CONTEXT_TEXTAREA: {
            legend: '3. Textareas',
            EL_ROW: [
                {
                    error: 'oops I did it again',
                    name: 'textarea1',
                    Question: {text: 'Standard textarea (no user resize)'},
                    EL_TEXTAREA: {}
                },
                {
                    error: 'oops I did it again',
                    name: 'textarea2',
                    Question: {text: 'Standard textarea (no user resize)'},
                    EL_TEXTAREA: { mod: '-flex-v'}
                },
                {
                    error: 'oops I did it again',
                    name: 'textarea3',
                    Question: {text: 'Standard textarea (no user resize) with supporting information', hint: 'This question has supporting information'},
                    EL_TEXTAREA: {}
                }
            ]
        },

        CONTEXT_DATE: {
            legend: '4. Date & time inputs',
            EL_ROW: [
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'date',
                    Question: {text: 'Date input', hint: 'For example, 31 03 1980'},
                    EL_DATE: {type: 'text'}
                },
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'pin',
                    Question: {text: 'What are the first, second and fourth digits of your PIN?'},
                    EL_PIN: {type: 'text', digit1: '1st', digit2: '2nd', digit3: '4th'}
                },
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'time',
                    Question: {text: 'Time input', hint: 'For example, 8:30am or 5:50pm (for midday use 12:00pm)'},
                    EL_TIME: {type: 'text'}
                }
            ]
        },

        CONTEXT_RADIO: {
            legend: '5. Radios',
            EL_ROW: [
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'radio',
                    Question: {text: 'Default radio'},
                    EL_TOUCH: {
                        options: [
                            { value: '1', type: 'radio', text: 'option 1'},
                            { value: '2', type: 'radio', text: 'option 2'},
                            { value: '3', type: 'radio', text: 'option 3'}
                        ]
                    }
                },
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'radioEdge',
                    Question: {text: 'Default radio with edge case'},
                    EL_TOUCH: {
                        options: [
                            { value: '1', type: 'radio', text: 'Petrol'},
                            { value: '2', type: 'radio', text: 'Diesel'},
                            { blockText: 'or'},
                            { value: '3', type: 'radio', text: 'Electric'}
                        ]
                    }
                },
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'radioInline',
                    Question: {text: 'Inline radio', hint: 'Radio buttons can be displayed inline using an \'inline\' modifier on the fieldset'},
                    EL_TOUCH: {
                        isInline: true,
                        options: [
                            { value: '1', type: 'radio', text: 'option 1'},
                            { value: '2', type: 'radio', text: 'option 2'}
                        ]
                    }
                }
            ]
        },

        CONTEXT_CHECKBOX: {
            legend: '6. Checkboxes',
            EL_ROW: [
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'checkbox',
                    Question: {text: 'Default checkbox', hint: 'Please select all that apply'},
                    EL_TOUCH: {
                        options: [
                            { value: '1', type: 'checkbox', text: 'option 1'},
                            { value: '2', type: 'checkbox', text: 'option 2'},
                            { value: '3', type: 'checkbox', text: 'option 3'}
                        ]
                    }
                },
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'checkboxInline',
                    Question: {text: 'Inline checkbox', hint: 'Checkbox buttons can be displayed inline using an \'inline\' modifier on the fieldset'},
                    EL_TOUCH: {
                        isInline: true,
                        options: [
                            { value: '1', type: 'checkbox', text: 'option 1'},
                            { value: '2', type: 'checkbox', text: 'option 2'}
                        ]
                    }
                },
                {
                    error: 'oops I did it again',
                    name: 'telephoneWithInline',
                    Question: {text: 'Telephone number', hint: 'Large hit areas aren\'t always appropriate.'},
                    EL_INPUT: {
                        type: 'telephone',
                        EL_INLINECHECKBOX: { name:'textPhone', value: '1', text: 'I need to be contacted using a text phone'}
                    }
                }
            ]
        },
        
        CONTEXT_INSET: {
            legend: '7. Inset (hidden) form inputs',
            EL_ROW: [
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'radioNI',
                    Question: {text: 'Do you know their National Insurance number?'},
                    EL_TOUCH: {
                        isInline: true,
                        options: [
                            { value: '1', type: 'radio', text: 'Yes', dataTarget: 'tgt-ni'},
                            { value: '2', type: 'radio', text: 'No'}
                        ]
                    },
                    EL_TARGET: {
                        dataTarget: 'tgt-ni',
                        error: 'oops I did it again',
                        Question: {text: 'National Insurance number'},
                        EL_INPUT: {type: 'text'}
                    }
                },
                {
                    isFieldset: true,
                    error: 'oops I did it again',
                    name: 'nationality',
                    Question: {text: 'What is your nationality?', hint: 'Select all options that are relevant to you.'},
                    EL_TOUCH: {
                        options: [
                            { value: '1', type: 'checkbox', text: 'British (including English, Scottish, Welsh and Northern Irish)'},
                            { value: '2', type: 'checkbox', text: 'Irish'},
                            { value: '3', type: 'checkbox', text: 'Citizen of a different country', dataTarget: 'tgt-country'}
                        ]
                    },
                    EL_TARGET: {
                        dataTarget: 'tgt-country',
                        error: 'oops I did it again',
                        Question: {text: 'Country name'},
                        EL_INPUT: {type: 'text'}
                    }
                },
                {  
                    error: 'oops I did it again',
                    name: 'model',
                    Question: {text: 'Model'},
                    EL_SELECT: {
                        dataTarget: 'tgt-model',
                        dataTargetValue: '0',
                        options: [
                            {value: '1', text: 'Couger'},
                            {value: '2', text: 'Fiesta'},
                            {value: '3', text: 'Focus'},
                            {value: '4', text: 'Mondeo'},
                            {value: '0', text: 'Other'}
                        ]
                    },
                    EL_TARGET: {
                        dataTarget: 'tgt-model',
                        error: 'oops I did it again',
                        Question: {text: 'If other, please specify'},
                        EL_INPUT: {type: 'text'}
                    }
                }

            ]
        },
        
        CONTEXT_ADDRESS: {
            legend: '8. Address input',
            EL_ROW: [
                {
                    error: 'oops I did it again',
                    name: 'address1',
                    Question: {text: 'Home address'},
                    EL_INPUT: {type: 'text', isCompound: true}
                },
                {
                    error: 'oops I did it again',
                    name: 'address2',
                    mod: 'visuallyhidden',
                    Question: {text: 'Home address line 2'},
                    EL_INPUT: {type: 'text', isCompound: true}
                },
                {
                    error: 'oops I did it again',
                    name: 'address3',
                    mod: 'visuallyhidden',
                    Question: {text: 'Home address line 3'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    error: 'oops I did it again',
                    name: 'addressTown',
                    Question: {text: 'Town or city'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    error: 'oops I did it again',
                    name: 'addressCountry',
                    Question: {text: 'Country (optional)'},
                    EL_INPUT: {type: 'text'}
                },
                {
                    error: 'oops I did it again',
                    name: 'addressPostcode',
                    Question: {text: 'Postcode'},
                    EL_INPUT: {type: 'text', mod: '1-8'}
                }
            ]
        },
        
        CONTEXT_2FA: {
            legend: '9. PIN/2FA input',
            EL_ROW: [
                {
                    error: 'oops I did it again',
                    name: 'servicePIN',
                    EL_2FA: {text: 'Your MOT testing service PIN'}, //, pin: '120355'},
                    Question: {text: 'Please enter your PIN'},
                    EL_INPUT: {type: 'password'}
                }
            ]
        },

        CONTEXT_PASSWORD: {
            legend: '10. Password with criteria',
            EL_ROW: [
                {
                    EL_CRITERIA: {
                        name: 'password-criteria-scope',
                        text: 'Your password must have:',
                        userId: 'MODD0011' // Remove this for initial password creation
                    }
                },
                {
                    error: 'oops I did it again',
                    name: 'password',
                    Question: {text: 'Create a password'},
                    EL_INPUT: {type: 'password'}
                },
                {
                    error: 'oops I did it again',
                    name: 'passwordConfirm',
                    Question: {text: 'Re-type your password'},
                    EL_INPUT: {type: 'password'}
                }
            ]
        },
        
        ContentNavigation : [
            {
                secondary : {link : 'Return home', href : '/'}
                
            }
        ]
    };
}(this, module));
