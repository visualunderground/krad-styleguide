/*jslint node: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global require */
'use strict';

var fs = require('fs');

(function(globals) {

    function Styleguide (viewDir, assetPath) {
        this.viewDir = viewDir;
        this.assetPath = assetPath;
    }

    Styleguide.prototype.setOptions = function setOptions(options) {
        this.viewDir = options.viewDir || '';
        this.assetPath = options.assetPath || '';
    };

    Styleguide.prototype.getViewData = function(strFileName) {
        var file = this.viewDir + '/modules/' + strFileName +'.json',
            jsFile = this.viewDir + '/modules/' + strFileName +'.js',
            viewData;
    
        try {
            viewData = JSON.parse(fs.readFileSync(file, 'utf8'));
        } catch (e) {
            var fileExists = fs.existsSync(jsFile);

            if (fileExists) {
                viewData = JSON.parse(JSON.stringify(require(jsFile)));
            } else {
                viewData = {};
                console.log('The data for view ' + file + ' does not exist!');
                console.log('The js data for view ' + jsFile + ' does not exist!');
            }
        }
        return viewData;
    };

    Styleguide.prototype.getData = function getData(viewName, options) {
        var index;
        var viewData = this.getViewData(viewName);
        var data =  {
            'assetPath' : this.assetPath, 
        };

        for (index in viewData) {
            data[index] = viewData[index]; 
        }

        options = options || {};

        for(index in options) { 
            data[index] = options[index]; 
        }
        // console.log(JSON.stringify(data));
        return data;
    };

    globals.Styleguide = new Styleguide();
}(this));

