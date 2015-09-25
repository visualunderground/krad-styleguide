/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type: 'Authorised Examiner',
            title: 'Johns Garage',
            tertiary: '85 Vauxhall Cross, London, SE11 5LL'
        },

        EL_BREADCRUMB: [ 
            {text: 'City Fixes Ltd.'}
        ],

        CONTEXT_ONE: [
            {
                heading: 'Business details',
                'element:key-value-list': {
                    'key-value-list-data': [
                        {
                            key: { value: 'Name'},
                            value: {value: 'City Fixes Ltd.'}
                        },
                        {
                            key: {value: 'AE ID'},
                            value: {value: 'AE1438'}
                        },
                        {
                            key: { value: 'Trading name'},
                            value: {value: 'City Fixes'}
                        },
                        {
                            key: { value: 'Business type'},
                            value: {value: 'Company'}
                        },
                        {
                            key: { value: 'Company number'},
                            value: {value: 'UK001122'}
                        },
                        {
                            key: { value: 'Status valid from'},
                            value: {value: '15 September 2015'}
                        },
                        {
                            key: { value: 'AE Appeal status'},
                            value: {value: 'N/A'}
                        },
                        {
                            key: { value: 'AE Withdrawal date'},
                            value: {value: 'N/A'}
                        },
                        {
                            key: { value: 'Data disclosure indicator'},
                            value: {value: 'May not be disclosed'}
                        },
                        {
                            key: { value: 'DVSA area office'},
                            value: {value: '4'}
                        }
                    ]
                }
         
            }
        ],

        CONTEXT_TWO: [
            {
                heading: 'Contact details',
                'callsToAction': [
                    {
                        value: 'Change contact details'
                    }
                ],


                'element:key-value-list': [
                    {
                        'key-value-list-heading': {
                            value: 'Registered office'
                        },
                        'key-value-list-data': [
                            {
                                key: {value: 'Address'},
                                value: {value: '85 Vauxhall Cross, London, SE11 5LL'}
                            },
                            {
                                key: {value: 'Email'},
                                value: {value: 'customer-team@har-garage.com'}
                            },
                            {
                                key: {value: 'Telephone'},
                                value: {value: '0800 789 111', modifier: 'tabular'}
                            }
                        ]
                    },
                    {
                        'key-value-list-heading': {
                            value: 'Correspondence'
                        },
                        'key-value-list-data': [
                            {
                                key: {value: 'Address'},
                                value: {value: '57 Hawthornden Way, Enfield, London, SE11 5LL'}
                            },
                            {
                                key: {value: 'Email'},
                                value: {value: 'customer-team@har-garage.com'}
                            },
                            {
                                key: {value: 'Telephone'},
                                value: {value: '0800 789 100', modifier: 'tabular'}
                            }
                        ]
                    }
                ]
            }
        ],

        CONTEXT_THREE: [
            {
                heading: 'Roles',
                'element:key-value-list': {
                    'key-value-list-data': [
                        {
                            key: {value: 'Bob Thomas Arctor'},
                            value: {value: 'Authorised examiner delegate'}
                        },
                        {
                            key: { value: 'Philip Fry'},
                            value: {value: 'Authorised examiner designated manager'}
                        }
                    ]
                }
                
            }
        ],

        CONTEXT_FOUR: [
            {
                heading: 'Vehicle Testing Stations',
                'element:key-value-list': {
                    'key-value-list-data': [
                        {
                            key: {value: 'Popular Garages', meta: '85 Vauxhall Cross, London, SE11 5LL'},
                            value: {value: 'V1234'}
                        },
                        {
                            key: {value: 'Johns Garage', meta: '16 Charing Cross Road, London, E17 9AU'},
                            value: {value: 'V1252'}
                        }
                        
                    ]
                }
                
            }
        ],

        EL_STATUS: {
            statusList: [
                {type: 'Status', state: {value: 'Approved', mod: 'success'}},
                {type: 'Slots', state: {value: '2,243', mod: 'info'}}
            ]

        },

        EL_RELATED: [
            {
                title: 'Related', 
                list: [
                    {text: 'Event history'}
                ]
            },
            {
                title: 'Slots', 
                list: [
                    {text: 'Buy slots'},
                    {text: 'Transaction history'},
                    {text: 'Slot usage'},
                    {text: 'Test logs'}
                ]
            }
        ],
    
        ContentNavigation: [
            {
                secondary: {link: 'Return home'}
                
            }
        ]
    };
}(this, module));

