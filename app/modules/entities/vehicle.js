/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type: 'Vehicle',
            title: 'BMW X5',
            tertiary: 'R3G N0, 1M8GDM9AXKP042788'
        },

        EL_BREADCRUMB: [ 
            {text: 'Vehicle'}
        ],

        CONTEXT_ONE: [
            {
                heading: 'Specification',
                'callsToAction': [
                    {
                        value: 'Change specification'
                    }
                ],
                'element:key-value-list': {
                    'key-value-list-data': [
                        {
                            key: { value: 'Make'},
                            value: {value: ' BMW'}
                        },
                        {
                            key: {value: 'Model'},
                            value: {value: 'X5'}
                        },
                        {
                            key: { value: 'Fuel type'},
                            value: {value: 'Diesel'}
                        },
                        {
                            key: { value: 'Transmission'},
                            value: {value: 'Manual'}
                        },
                        {
                            key: { value: 'Cylinder capacity'},
                            value: {value: '3998'}
                        },
                        {
                            key: { value: 'Body type'},
                            value: {value: '4 door saloon'}
                        },
                        {
                            key: { value: 'Colour'},
                            value: {value: 'Black'}
                        },
                        {
                            key: { value: 'Number of seats'},
                            value: {value: '5'}
                        },
                        {
                            key: { value: 'Number of seat belts'},
                            value: {value: '5', meta: 'Last checked 02 Jan 2014'}
                        },
                        {
                            key: { value: 'Record created'},
                            value: {value: '10 Dec 2011'}
                        }
                    ]
                }
         
            }
        ],

        CONTEXT_TWO: [
            {
                heading: 'Vehicle registration',
                'callsToAction': [
                    {
                        value: 'Change vehicle registration'
                    }
                ],

                'element:key-value-list': {
                    'key-value-list-data': [
                        {
                            key: { value: 'VRM'},
                            value: {value: 'M44 MMS'}
                        },
                        {
                            key: { value: 'VIN'},
                            value: {value: '1M8GDM9AXKP042788'}
                        },
                        {
                            key: { value: 'Declared new'},
                            value: {value: 'Yes'}
                        },
                        {
                            key: { value: 'Manufacture date'},
                            value: {value: '1 Nov 2011'}
                        },
                        {
                            key: { value: 'First registered'},
                            value: {value: '10 Dec 2011'}
                        },
                        {
                            key: { value: 'First used'},
                            value: {value: '10 Dec 2011'}
                        }
                    ]
                }
            }
        ],

        EL_STATUS: {
            statusList: [
                {type: 'Mystery vehicle', state: {value: 'Active', mod: 'alert'}},
                {type: 'MOT tests', state: {value: '6', mod: 'info'}}
            ]

        },

        EL_RELATED: [
            {
                title: 'Related', 
                list: [
                    {text: 'View MOT history'},
                    {text: 'Mystery vehicle'}
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

