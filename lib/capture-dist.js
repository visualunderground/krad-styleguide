/*jslint node: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global require, __dirname */

"use strict";
var appConfig = require(__dirname + "/../app/appConfig.js").AppConfig,
    StaticEngine = require(__dirname + "/static-engine").StaticEngine,
    staticEngine = new StaticEngine(appConfig);

// Save the dist files.
staticEngine.savePages(appConfig.getDistFiles(), appConfig.getDistFolder());

// You can then add multiple groups of pages for example:
// staticEngine.savePages(appConfig.getLoginPages(), appConfig.getLoginFolder());
