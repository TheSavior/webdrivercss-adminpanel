'use strict';

var Path = require('path');
var Request = require('./Request');

var ImageActions = require('../actions/ImageActions');

var api = '/api/';

var ApiHelper = {
  getBranches: function() {
    Request.get(Path.join(api, 'getBranches'))
      .then(ImageActions.setBranches);
  },

  getDiffsForBranch: function(branchName) {
    Request.get(Path.join(api, 'getDiffs'), {
        branchName: branchName
      })
      .then(function(result) {
        ImageActions.setDiffs(branchName, result);
      });
  }
};


module.exports = ApiHelper;
