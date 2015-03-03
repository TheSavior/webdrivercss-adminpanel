'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon', 'browserify'],

    files: [
      'tests/**/*.{js,jsx}'
    ],

    preprocessors: {
      'tests/**/*.{js,jsx}': ['browserify']
    },

    browsers: ['Chrome'],

    reporters: ['dots'],

    browserify: {
      transform: ['reactify'],
      extensions: ['.jsx', '.react.jsx'],
      debug: true
    },

    logLevel: 'error',
    autoWatch: false,
    singleRun: true
  });
};
