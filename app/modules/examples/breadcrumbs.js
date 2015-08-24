/**
 * Data export
 */

(function(globals, module) {
    'use strict';

    module.exports = {

        ContentHeader: {
            type : 'Examples',
            title : 'Breadcrumbs'
        },
        
        CONTEXT_AE : {
            EL_BREADCRUMB : [ 
                {text: 'Henderson Auto Repairs Ltd.'}
            ],
            ContentHeader: {
                type : 'Authorised Examiner',
                title : 'Henderson Auto Repairs Ltd.',
                tertiary : '57 Hawthornden Way, Enfield, London, SE11 5LL'
            }
        },

        CONTEXT_AE_CHANGE : {
            EL_BREADCRUMB : [ 
                {text: 'Henderson Auto Repairs Ltd.', href : '#'},
                {text: 'Change business details'}
            ],
            ContentHeader: {
                type : 'Authorised Examiner',
                title : 'Change business details'
            }
        },

        CONTEXT_AE_CHANGE_REVIEW : {
            EL_BREADCRUMB : [ 
                {text: 'Henderson Auto Repairs Ltd.', href : '#'},
                {text: 'Change business details'}
            ],
            ContentHeader: {
                type : 'Authorised Examiner',
                title : 'Review your changes'
            }
        },

        CONTEXT_VTS : {
            EL_BREADCRUMB : [ 
                {text: 'Henderson Auto Repairs Ltd.', href : '#'},
                {text: 'Hendersons Garage'}
            ],
            ContentHeader: {
                type : 'Vehicle Testing Station ',
                title : 'Hendersons Garage',
                tertiary : '85 Vauxhall Cross, London, SE11 5LL'
            }
        },

        CONTEXT_VTS_CHANGE : {
            EL_BREADCRUMB : [ 
                {text: 'Henderson Auto Repairs Ltd.', href : '#'},
                {text: 'Hendersons Garage', href : '#'},
                {text: 'Change testing facilities'}
            ],
            ContentHeader: {
                type : 'Vehicle Testing Station',
                title : 'Change testing facilities'
            }
        },

        CONTEXT_VTS_CHANGE_REVIEW : {
            EL_BREADCRUMB : [ 
                {text: 'Henderson Auto Repairs Ltd.', href : '#'},
                {text: 'Hendersons Garage', href : '#'},
                {text: 'Change testing facilities'}
            ],
            ContentHeader: {
                type : 'Vehicle Testing Station ',
                title : 'Review your changes'
            }
        },

        ContentNavigation : [
            {
                secondary: {link : 'Return home', href : '/'}
                
            }
        ]
    };
}(this, module));
