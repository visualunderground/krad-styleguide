#!/bin/bash
bundle install
node_modules/bower/bin/bower install
node_modules/grunt-cli/bin/grunt copy:dependencies
node_modules/grunt-cli/bin/grunt build:no-lint

