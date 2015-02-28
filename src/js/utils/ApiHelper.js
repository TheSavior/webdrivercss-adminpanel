'use strict';

var Path = require('path');
var Request = require('./Request');

var ImageActions = require('../actions/ImageActions');

var api = 'http://0.0.0.0:9000/api/';

var ApiHelper = {
  getBranches: function() {
    Request.get(api+'getBranches')
      .then(ImageActions.setBranches);
  },

  getDiffsForBranch: function(branchName) {
    Request.get(api+'getDiffs', {
        branchName: branchName
      })
      .then(function(result) {
        ImageActions.setDiffs(branchName, result);
      });
  }
};


module.exports = ApiHelper;
