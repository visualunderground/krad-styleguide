/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type: 'Examples',
            title : 'Filtered data'
        },
        
        ResultTable: {
            heading: [
                { text: 'Transaction<br />number' },
                { text: 'Date', href: '#'},
                { text: 'Payment<br />method', href: '#'},
                { text: 'Quantity', href: '#', mod: 'numeric', sortOrder: 'sort-desc'},
                { text: 'Cost', href: '#', mod: 'numeric'}
            ],

            data: [
                [
                    { text: 'MOT-2015-001234', mod: 'tabular', href: '#' },
                    { text: '12 Dec 2014', mod: 'tabular' },
                    { text: 'Card' },
                    { text: '400', mod: 'numeric' },
                    { text: '&pound;1234.00', mod: 'numeric' }
                ],
                [
                    { text: 'MOT-2015-001233', mod: 'tabular', href: '#' },
                    { text: '12 Dec 2014', mod: 'tabular' },
                    { text: 'Card' },
                    { text: '270', mod: 'numeric' },
                    { text: '&pound;820.00', mod: 'numeric' }
                ],
                [
                    { text: 'MOT-2015-001232', mod: 'tabular', href: '#' },
                    { text: '12 Dec 2014', mod: 'tabular' },
                    { text: 'Card' },
                    { text: '270', mod: 'numeric' },
                    { text: '&pound;820.00', mod: 'numeric' }
                ],
                [
                    { text: 'MOT-2015-001230', mod: 'tabular', href: '#' },
                    { text: '12 Dec 2014', mod: 'tabular' },
                    { text: 'Card' },
                    { text: '270', mod: 'numeric' },
                    { text: '&pound;820.00', mod: 'numeric' }
                ]
            ],

        },

        ContentNavigation : [
            {
                secondary: {link: 'Return home', href: '/'}
                
            }
        ]
    };
}(this, module));
