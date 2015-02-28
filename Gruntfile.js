'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    // Client App
    browserify: {
      options: {
        transform: ['reactify'],
        browserifyOptions: {
          extensions: ['.jsx', '.react.jsx'],
          debug: true
        }
      },

      production: {
        options: {
          debug: false,
        },
        files: {
          'dist/js/main.js': ['src/js/main.jsx']
        }
      },

      development: {
        options: {
          debug: true,
        },

        files: {
          'dist/js/main.js': ['src/js/main.jsx']
        }
      }
    },

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/main.css': 'src/css/main.scss'
        }
      },

      production: {
        files: {
          'dist/css/main.css': 'src/css/main.scss'
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        interrupt: true
      },

      js: {
        files: ['src/**/*.js', 'src/**/*.react.jsx', 'src/**/*.jsx'],
        tasks: ['browserify:development']
      },

      scss: {
        files: ['src/**/*.scss'],
        tasks: ['sass:development']
      },

      gruntfile: {
        files: ['Gruntfile.js']
      },

      livereload: {
        options: {
          livereload: true,
        },

        files: [
          'dist/**/*.js',
          'dist/**/*.css'
        ]
      },
    },

    copy: {
      dist: {
        files: [{
          'dist/img/webdriverio.png': ['src/img/webdriverio.png'],
        }, {
          expand: true,
          dot: true,
          cwd: 'src/',
          dest: 'dist/',
          src: [
            '*.{ico,png}',
            'index.html',
            'bower_components/**/*'
          ]
        }]
      }
    },

    'http-server': {
      dev: {
        root: 'dist',
        port: 8282,
        host: "0.0.0.0",
        cache: 60,
        showDir: false,
        autoIndex: true,
        ext: "html",
        runInBackground: true
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['copy', 'sass:development', 'browserify:development']);

  grunt.registerTask('default', ['build', 'http-server', 'watch']);
};
