/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Vehicle Testing Station',
            title : 'Johns Garage',
            tertiary: '1 Test Road, Bristol, BS1 1NT'
        },

        EL_BREADCRUMB : [ 
            {text: 'City Fixes Ltd.', href : '#'},
            {text: 'Johns Garage'}
        ],

        CONTEXT_ONE: [
            {
                heading: "Site details",
                "element:key-value-list" : {
                    "key-value-list-data" : [
                        {
                            key : { value : "Name"},
                            value : {value: "Johns Garage"}
                        },
                        {
                            key : {value : "VTS ID"},
                            value : {value : "V11234"}
                        },
                        {
                            key : { value : "Classes"},
                            value : {value: "4"}
                        },
                        {
                            key : { value : "Type"},
                            value : {value: "Vehicle Testing Station"}
                        },
                        {
                            key : { value : "Authorised Examiner"},
                            value : {value: "City Fixes Ltd."}
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
                    value : "Change contact details"
                }
            ],
            "element:key-value-list" : {
                "key-value-list-data" : [
                    {
                        key : {value : "Address"},
                        value : {value : "1 Test Road, Bristol, BS1 1NT"}
                    },
                    {
                        key : {value : "Country"},
                        value : {value : "England"}
                    },
                    {
                        key : {value : "Email"},
                        value : {value : "customer-team@johns-garage.com"}
                    },
                    {
                        key : {value : "Telephone"},
                        value : {value : "0800 789 111", modifier : "tabular"}
                    }
                ]
            }
        }
    ],

    CONTEXT_THREE: [
        {
            heading: "Testing facilities",
            callsToAction: [
                {
                    value : "Change testing facilities"
                }
            ],
            "element:key-value-list" : {
                "key-value-list-data" : [
                    {
                        key : { value : "One Person Test Lane (OPTL)"},
                        value : {value: "1"}
                    },
                    {
                        key : { value : "Two Person Test Lane (TPTL)"},
                        value : {value: "2"}
                    }
                ]
            }
            
        }
    ],

    CONTEXT_FOUR: [
        {
            heading: "Roles",
            callsToAction: [
                {
                    value : "Assign a role"
                }
            ],
            "element:key-value-list" : {
                "key-value-list-data" : [
                    {
                        key : {value : "Bob Thomas Arctor"},
                        value : {value : "Authorised examiner delegate"}
                    },
                    {
                        key : { value : "Philip Fry"},
                        value : {value: "Authorised examiner designated manager"}
                    }
                ]
            }
            
        }
    ],

    CONTEXT_FIVE: [
        {
            heading: "Default test settings",
            callsToAction: [
                {
                    value : "Change default test settings"
                }
            ],
            "element:key-value-list" : [
                {
                    "key-value-list-heading": {
                        value : "Class 1 and 2"
                    },
                    "key-value-list-data" : [
                        {
                            key : {value : "Service brake"},
                            value : {value : "Roller"}
                        },
                        {
                            key : {value : "Parking brake"},
                            value : {value : "Roller"}
                        }
                    ]
                },
                {
                    "key-value-list-heading": {
                        value : "Class 3, 4, 5 and 7"
                    },
                    "key-value-list-data" : [
                        {
                            key : {value : "Service brake"},
                            value : {value : "Roller"}
                        },
                        {
                            key : {value : "Parking brake"},
                            value : {value : "Roller"}
                        }
                    ]
                }
            ]
            
        }
    ],

    CONTEXT_SIX: [
        {
            heading: "Testing hours",
            callsToAction: [
                {
                    value : "Change testing hours"
                }
            ],

            "element:key-value-list" : {
                "key-value-list-data" : [
                    {
                        key : { value : "Monday"},
                        value : {value: "8.00am to 4.30pm", modifier : "tabular"}
                    },
                    {
                        key : { value : "Tuesday"},
                        value : {value: "8.00am to 4.30pm", modifier : "tabular"}
                    },
                    {
                        key : { value : "Wednesday"},
                        value : {value: "9.30am to 3.00pm ", modifier : "tabular"}
                    },
                    {
                        key : { value : "Thursday"},
                        value : {value: "8.00am to 4.30pm", modifier : "tabular"}
                    },
                    {
                        key : { value : "Friday"},
                        value : {value: "8.00am to 4.30pm", modifier : "tabular"}
                    },
                    {
                        key : { value : "Saturday"},
                        value : {value: "Closed", modifier : "tabular"}
                    },
                    {
                        key : { value : "Sunday"},
                        value : {value: "Closed", modifier : "tabular"}
                    }
                ],
                "key-value-list-footer": {
                    value : "These times do not include bank holidays"
                }
            }
            
        }
    ],

    CONTEXT_SEVEN: [
        {
            heading: "Active MOT tests",
            "element:key-value-list" : {
                "key-value-list-data" : [
                    {
                        key : {value : "Bob Thomas Arctor"},
                        value : {value : "R3G N0", meta: "Cadillac, Escalade", "href": "#"}
                    },
                    {
                        key : { value : "Mallory Archer"},
                        value : {value: "L33 T", meta: "Audi, A3", "href": "#"}
                    }
                ]
            }
            
        }
    ],

        EL_STATUS: {
            statusList: [
                {type: "Status", state : {value: "Approved", mod: "success"}},
                {type: "Active MOT tests", state : {value: "2", mod: "info"}}
            ]

        },

        EL_RELATED: [
            {
                title: "Related", 
                list : [
                    {text: "MOT test certificates"},
                    {text: "Event history"}
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

