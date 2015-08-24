/*jslint browser: true, evil: false, plusplus: true, white: true, indent: 4, nomen: true */
/*global require, module */
'use strict';

module.exports = function(grunt) {
    
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Builds Sass
        sass: {
            dev: {
                options: {
                    includePaths: ['govuk_components/public/sass'],
                    outputStyle: 'compressed',
                    imagePath: '../images'
                },
                files: {
                    'app/public/stylesheets/dvsa.css': 'src/scss/dvsa.scss',
                    'app/public/stylesheets/dvsa-ie6.css': 'src/scss/dvsa-ie6.scss',
                    'app/public/stylesheets/dvsa-ie7.css': 'src/scss/dvsa-ie7.scss',
                    'app/public/stylesheets/dvsa-ie8.css': 'src/scss/dvsa-ie8.scss'
                }
            }
        },

        scsslint: {
            dev: [
                'src/**/*.scss'
            ]
        },

        imagemin: {
            options: {
                optimizationLevel: 3
            },
            dist: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'src/images/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,jpeg,gif}'], // Actual patterns to match
                    dest: 'app/public/images/' // Destination path prefix
                }]
            }
        },

        copy: {

            authentication_js: {
                expand: true,
                cwd: 'src/js/dvsa/',
                src: 'authentication.js',
                dest: 'dist/javascripts/'
            },

            // govuk_template: {
            //     expand: true,
            //     src: 'bower_components/govuk_template/views/layouts/govuk_template.html',
            //     dest: 'govuk_components/views/',
            //     flatten: true,
            //     filter: 'isFile'
            // },

            govuk_template_assets: {
                expand: true,
                src: '**',
                cwd: 'bower_components/govuk_template/assets/',
                dest: 'govuk_components/public/'
            },

            govuk_frontend_toolkit_scss: {
                expand: true,
                src: '**',
                cwd: 'bower_components/govuk_toolkit/stylesheets/',
                dest: 'govuk_components/public/sass/'
            },

            govuk_frontend_toolkit_js: {
                expand: true,
                src: '**',
                cwd: 'bower_components/govuk_toolkit/javascripts/',
                dest: 'govuk_components/public/javascripts/'
            },

            govuk_frontend_toolkit_img: {
                expand: true,
                src: '**',
                cwd: 'bower_components/govuk_toolkit/images/',
                dest: 'govuk_components/public/images/icons/'
            },

            govuk_elements_js: {
                expand: true,
                src: '**',
                cwd: 'bower_components/govuk_elements/public/javascripts/',
                dest: 'govuk_components/public/javascripts/'
            },

            govuk_elements_img: {
                expand: true,
                src: '**',
                cwd: 'bower_components/govuk_elements/public/images/',
                dest: 'govuk_components/public/images/'
            },

            govuk_elements_scss: {
                expand: true,
                src: '**',
                cwd: 'bower_components/govuk_elements/public/sass/',
                dest: 'govuk_components/public/sass/'
            },

            toapp: {
                expand: true,
                src: ['images/**', 'javascripts/**', 'stylesheets/**'],
                cwd: 'govuk_components/public/',
                dest: 'app/public/'
            },

            todist: {
                expand: true,
                src: ['images/**', 'javascripts/**', 'stylesheets/**'],
                cwd: 'app/public/',
                dest: 'dist/'
            },

            dev: {
                expand: true,
                flatten: true,
                src: [
                    'bower_components/chai/chai.js',
                    'bower_components/mocha/mocha.js',
                    'bower_components/mocha/mocha.css',
                    'bower_components/sinon-browser-only/sinon.js',
                ],
                dest: 'src/js/vendor/'
            }
        },

        watch: {
            css: {
                files: 'src/scss/**/*.scss',
                tasks: ['build:css'],
                options: {
                    interrupt: true,
                    livereload: true,
                },
            },
            js: {
                files: ['src/js/dvsa.js','src/js/dvsa/*.js', 'src/js/main.js'],
                tasks: ['build:js'],
                options: {
                    interrupt: true,
                    livereload: true,
                }
            }
        },

        concat: {
            js: {
                src: [
                    'src/js/dvsa.js',
                    'src/js/dvsa/*.js',
                    // main.js always last !
                    'src/js/main.js',
                ],
                dest: 'app/public/javascripts/dvsa.js'
            }
        },

        // Options are in the .jshintrc
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                // See https://jslinterrors.com
                '-W083': true, // Functions in loop error.
                '-W004': true, // {a} already defined. This is happening whether we are checking for option config object.
            },
            beforeconcat: ['src/js/dvsa.js', 'src/js/dvsa/*.js', 'src/js/main.js'],
            afterconcat: ['app/public/javascripts/dvsa.js']
        },

        shell: {
            options: {
                stderr: false
            },
            wraith: {
                command: 'wraith capture tests/wraith/configs/config.yaml && open tests/wraith/shots/gallery.html'
            }
        },

        uglify: {
            authentication: {
                options: {
                    mangle: false,
                    sourceMap: false,
                    compress: {
                        drop_console: true
                    },
                    // the banner is inserted at the top of the output
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    'app/public/javascripts/authentication.js': ['src/js/dvsa/authentication.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');

    // Copy Tasks:
    //      1.  'copy:dependencies' copies, and amalgamates, assets from Bower dependencies to a 
    //          'govuk_components' directory AND then copies required assets to the application's 
    //          'public' folder
    //
    //      2.  'copy:to-dist' copies the front end assets within the express app 
    //          to the dist folder for consumption by mot-web-frontend

    grunt.registerTask('copy:dependencies', [
        'copy:govuk_template_assets',
        'copy:govuk_frontend_toolkit_scss',
        'copy:govuk_frontend_toolkit_js',
        'copy:govuk_frontend_toolkit_img',
        'copy:govuk_elements_scss',
        'copy:govuk_elements_js',
        'copy:govuk_elements_img',
        'copy:toapp'
    ]);

    // Build assets from src files
    grunt.registerTask('build:css', ['scsslint:dev', 'sass:dev']);
    grunt.registerTask('build:img', ['imagemin:dist']);
    grunt.registerTask('build:js', ['jshint:beforeconcat', 'concat:js', 'jshint:afterconcat', 'uglify:authentication']);

    grunt.registerTask('build:no-lint', ['sass:dev', 'build:img', 'concat:js', 'uglify:authentication']);
    grunt.registerTask('build', ['build:css', 'build:img', 'build:js']);

    grunt.registerTask('watcher', ['watch']);

    // Copy assets to dist folder
    grunt.registerTask('dist', ['copy:todist']);
    grunt.registerTask('test:integration', ['shell:wraith']);

    // Default task that happens during development
    grunt.registerTask('default', ['build:css', 'build:js']);

};