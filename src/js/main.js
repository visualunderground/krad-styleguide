/*jslint browser: true, evil: false, plusplus: true */
/*global DVSA, $, DVSASelectToggle */

(function (globals) {
    'use strict';
    // Add modules
    globals.DVSA.Modules.DVSASelectToggle = DVSASelectToggle;
    globals.DVSA.Modules.DVSACriteria = DVSACriteria;
    globals.DVSA.Modules.DVSACookiesEnabled = DVSACookiesEnabled;

    // Initialise
    globals.DVSA.init($({}));
}(this));
