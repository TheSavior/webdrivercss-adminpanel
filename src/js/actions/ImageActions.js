'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ImageConstants = require('../constants/ImageConstants');

var FeedActions = {
  setBranches: function(branches) {
    AppDispatcher.dispatchServerAction({
      type: ImageConstants.SET_BRANCHES,
      branches: branches
    });
  },

  setDiffs: function(branchName, result) {
    AppDispatcher.dispatchServerAction({
      type: ImageConstants.SET_DIFFS,
      branchName: branchName,
      result: result
    });
  }
};

module.exports = FeedActions;
