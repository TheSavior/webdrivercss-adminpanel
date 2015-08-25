'use strict';

var config;

var Config = {
  setConfig: function(newConfig) {
    config = newConfig;
  },

  getApiUrl: function() {
    return config.apiUrl;
  }
};

module.exports = Config;
