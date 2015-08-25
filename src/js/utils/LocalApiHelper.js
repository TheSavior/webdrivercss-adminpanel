'use strict';

var superagent = require('superagent');
require('superagent-as-promised')(superagent);

var LifecycleActions = require('../actions/LifecycleActions');
var Config = require('./Config');

var LocalApiHelper = {
  getConfig: function() {
    return superagent.get('/api/config')
    .then(function(result) {
      var config = result.body;

      Config.setConfig(config);
    });
  }
};

module.exports = LocalApiHelper;
