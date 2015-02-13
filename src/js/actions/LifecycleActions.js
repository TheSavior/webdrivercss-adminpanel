'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var LifecycleConstants = require('../constants/LifecycleConstants');

var LifecycleActions = {
  initialize: function() {
    AppDispatcher.dispatchAppAction({
      actionType: LifecycleConstants.INITIALIZE
    });
  }
};

module.exports = LifecycleActions;