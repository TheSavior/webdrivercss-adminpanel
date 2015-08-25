'use strict';

var Path = require('path');
var assert = require('chai').assert;
var Request = require('./Request');
var superagent = require('superagent');
require('superagent-as-promised')(superagent);

var LifecycleActions = require('../actions/LifecycleActions');
var ImageActions = require('../actions/ImageActions');
var Config = require('../utils/Config');

function getApiUrl() {
  return Config.getApiUrl() + '/api/';
}

var ApiHelper = {
  getDiffsForBuild: function(options) {
    assert.isObject(options);
    assert.isString(options.project);
    assert.isString(options.build);

    var api = getApiUrl();

    superagent
    .get(api+'getBuild')
    .query({
      project: options.project,
      id: options.build
    })
    .then(function(result) {
      var body = result.body;

      body.project = options.project;
      ImageActions.setDiffs(body);
    }, function() {
      console.error('Unknown build');
    });
  },

  approveBuild: function(options) {
    assert.isObject(options);
    assert.isString(options.project);
    assert.isString(options.build);

    var api = getApiUrl();

    superagent
    .post(api+'confirm')
    .send({
      project: options.project,
      build: options.build
    })
    .then(function(result) {
      var body = result.body;

      console.log(body);
    }, function(error) {
      console.error(error);
    });
  }
};

module.exports = ApiHelper;
