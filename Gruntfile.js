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

      express: {
        files: [
          'server.js',
          'server/**/*.{js,json}'
        ],
        tasks: ['express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
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

    // Server stuff
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: 'server.js',
          debug: true
        }
      },
      prod: {
        options: {
          script: 'dist/server.js',
          node_env: 'production'
        }
      }
    },

    // Debugging with node inspector
    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost'
        }
      }
    },

    // Use nodemon to run server in debug mode with an initial breakpoint
    nodemon: {
      debug: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug-brk'],
          env: {
            PORT: process.env.PORT || 9000
          },
          callback: function(nodemon) {
            nodemon.on('log', function(event) {
              console.log(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function() {
              setTimeout(function() {
                require('open')('http://localhost:8080/debug?port=5858');
              }, 500);
            });
          }
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      debug: {
        tasks: [
          'nodemon',
          'node-inspector'
        ],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function() {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function() {
      grunt.log.writeln('Done waiting!');
      done();
    }, 500);
  });

  grunt.registerTask('build', ['copy', 'sass:development', 'browserify:development']);
  grunt.registerTask('serve', ['build', 'express:dev', 'express-keepalive']);

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });
};
