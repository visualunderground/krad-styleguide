'use strict'

module.exports = function (grunt) {
  require('time-grunt')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Builds Sass
    sass: {
      dev: {
        options: {
          includePaths: ['src/vendor/frontend-library/styles'],
          outputStyle: 'compressed',
          imagePath: '../images'
        },
        files: {
          'app/public/stylesheets/nhsuk.css': 'src/scss/nhsuk.scss',
          'app/public/stylesheets/nhsuk-ie6.css': 'src/scss/nhsuk-ie6.scss',
          'app/public/stylesheets/nhsuk-ie7.css': 'src/scss/nhsuk-ie7.scss',
          'app/public/stylesheets/nhsuk-ie8.css': 'src/scss/nhsuk-ie8.scss',
          'app/public/stylesheets/nhsuk-print.css': 'src/scss/nhsuk-print.scss'
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
        files: [
          {
            expand: true,
            cwd: 'src/images',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: 'app/public/images/'
          },
          {
            expand: true,
            cwd: 'src/vendor/frontend-library/assets/images',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: 'app/public/images/'
          }
        ]
      }
    },

    copy: {

      frontendLibrary: {
        expand: true,
        src: '**',
        cwd: 'node_modules/frontend-library/app',
        dest: 'src/vendor/frontend-library/'
      },

      authentication_js: {
        expand: true,
        cwd: 'src/js/dvsa/',
        src: 'authentication.js',
        dest: 'dist/javascripts/'
      },

      todist: {
        expand: true,
        src: ['images/**', 'javascripts/**', 'stylesheets/**'],
        cwd: 'app/public/',
        dest: 'dist/'
      }
    },

    watch: {
      css: {
        files: 'src/scss/**/*.scss',
        tasks: ['build:css'],
        options: {
          interrupt: true,
          livereload: true
        }
      },
      js: {
        files: ['src/js/dvsa.js', 'src/js/dvsa/*.js', 'src/js/main.js'],
        tasks: ['build:js'],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    },

    concat: {
      js: {
        src: [
          'src/js/dvsa.js',
          'src/js/dvsa/*.js',
          // main.js always last !
          'src/js/main.js'
        ],
        dest: 'app/public/javascripts/dvsa.js'
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
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-notify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-uglify')

    // Build assets from src files
  grunt.registerTask('build:css', ['sass:dev'])
  grunt.registerTask('build:img', ['imagemin:dist'])
  grunt.registerTask('build:js', ['concat:js', 'uglify:authentication'])
  grunt.registerTask('build', ['build:css', 'build:img', 'build:js'])
  grunt.registerTask('watcher', ['watch'])

    // Copy assets to dist folder
  grunt.registerTask('dist', ['copy:todist'])

    // Default task that happens during development
  grunt.registerTask('default', ['build'])
}
