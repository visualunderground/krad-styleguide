/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Your account',
            title : 'Miss Mallory Archer'
        },

        EL_BREADCRUMB : [ 
            {text: 'Your account'}
        ],

        CONTEXT_ONE: [
            {
                heading: "Personal details",
                callsToAction: [
                    {
                        value: "Change personal details"
                    }
                ],

                "element:key-value-list" : {
                    "key-value-list-data" : [
                        {
                            key: {value: "Name"},
                            value: {value: "Miss Mallory Archer"}
                        },
                        {
                            key: {value: "User ID"},
                            value: {value: "aedm"}
                        },
                        {
                            key: {value: "Date of birth"},
                            value: {value: "9 November 1920"}
                        },
                        {
                            key: {value: "Driving licence number"},
                            value: {value: "ABCD3431"}
                        }
                    ]
                }
                
            }
        ],

        CONTEXT_TWO: [
            {
                heading: "Contact details",
                callsToAction: [
                    {
                        value: "Change contact details"
                    }
                ],

                "element:key-value-list" : {
                    "key-value-list-data" : [
                        {
                            key: {value: "Address"},
                            value: {value: "1 Straw Hut, 5 Uncanny St, Liverpool, L1 1PQ"}
                        },
                        {
                            key: {value: "Email"},
                            value: {value: "dummy@email.com", href: "#"}
                        },
                        {
                            key: {value: "Telephone"},
                            value: {value: "+768-45-4433630"}
                        }
                    ]
                }
                
            }
        ],

        CONTEXT_FOUR: [
            {
                heading: "Associations",
                "element:key-value-list" : {
                    "key-value-list-data" : [
                        {
                            key: {value: "Example AE Inc.", meta: "AE3412, 85 Vauxhall Cross, London, SE11 5LL"},
                            value: {value: "Authorised examiner designated manager<br >Authorised examiner delegate"}
                        },
                        {
                            key: {value: "Crazy Wheels Inc.", meta: "AE5555, 2 Test Road, Bristol, BS1 1NT"},
                            value: {value: "Authorised examiner designated manager"}
                        },
                        {
                            key: {value: "Square Wheels", meta: "AE5566, 13 Aston Quay, Bristol, BS1 1NT"},
                            value: {value: "Authorised examiner designated manager"}
                        }
                    ]
                }
                
            }
        ],

        EL_STATUS: {
            statusList: [
                {"type": "AEDM", state : {value: "Not applied"}},
                {"type": "Group A", meta: "Class 1 and 2 ", state : {value: "Demo test required", mod: "warn"}},
                {"type": "Group B", meta: "Class 3, 4, 5 and 7 ", state : {value: "Qualified", mod: "success"}},
                {"type": "Roles", state : {value: "4", mod: "info"}}
            ]

        },

        EL_RELATED: [
            {
                title: "Related", 
                list : [
                    {text: "Event history"}
                ]
            },
            {
                title: "Account security", 
                list : [
                    {text: "Change your password", href: "change-password"},
                    {text: "Change your security questions"},
                    {text: "Regenerate your PIN"}
                ]
            }   
        ],
    
        ContentNavigation : [
            {
                secondary: {link : 'Return home'}
                
            }
        ]
    };
}(this, module));

