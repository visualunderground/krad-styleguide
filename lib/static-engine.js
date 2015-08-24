/*jslint node: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global require, __dirname */

'use strict';
var http = require('http'),
    fs = require('fs');

(function(globals) {

    var StaticEngine = function StaticEngine(appConfig) {
        this.config = appConfig || {};
    };
    
    StaticEngine.prototype.savePages = function savePages(pages, folder) {
        for (var page in pages) {
            this.sendRequest(pages[page], folder);
        }
    };

    StaticEngine.prototype.sendRequest = function sendRequest(page, folder) {
        var self = this,
            opts = this.config.getHttpOptions(),
            filename = page.replace(/\//g,''),
            req;
        
        // Set the route
        opts.path = page; 

        req = http.request(opts, function(res) {
    
            var str = '';
            
            res.on('data', function(chunk) {
                str += chunk;
            });

            res.on('end', function() {
                self.writeViewFile(filename, str, folder);
            });
        });

        req.on('error', function(e) {
            console.log('Problem requesting ' + filename + ': ' + e.message);
        });

        req.end();
    };

    StaticEngine.prototype.writeViewFile = function writeViewFile(name, content, folder) {
        var fileName = folder + name + '.html';
        fs.writeFile(fileName, content, function(e) {
            if (e) {
                return console.log('Problem creating file: ' + name + '\n' + e);
            }
            console.log('View file created: ' + name);
        });
    };

    globals.StaticEngine = StaticEngine;
}(this));
