'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ImageConstants = require('../constants/ImageConstants');

var FeedActions = {
  setBranches: function(branches) {
    AppDispatcher.dispatchViewAction({
      type: ImageConstants.SET_BRANCHES,
      branches: branches
    });
  }
};

module.exports = FeedActions;
