'use strict';

var Path = require('path');
var assert = require('chai').assert;
var Request = require('./Request');
var superagent = require('superagent');
require('superagent-as-promised')(superagent);

var ImageActions = require('../actions/ImageActions');

var api = 'http://0.0.0.0:9000/api/';

var ApiHelper = {
  getDiffsForBuild: function(options) {
    assert.isObject(options);
    assert.isString(options.project);
    assert.isString(options.build);

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
