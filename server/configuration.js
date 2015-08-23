'use strict';

var merge = require('merge');

var defaults = {
  url: 'http://0.0.0.0',
  port: undefined,
  apiUrl: undefined
};

function Configuration() {
  this._config = merge(true, defaults);
}

Configuration.prototype = {
  set: function(newConfig) {
    merge(this._config, newConfig);
  },

  getUrl: function() {
    return this._config.ip;
  },

  getPort: function() {
    return this._config.port;
  },

  getApiUrl: function() {
    return this._config.apiUrl;
  }
};

module.exports = Configuration;
