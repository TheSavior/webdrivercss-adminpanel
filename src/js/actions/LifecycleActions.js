'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var LifecycleConstants = require('../constants/LifecycleConstants');

var LifecycleActions = {
  initialize: function() {
    AppDispatcher.dispatchAppAction({
      type: LifecycleConstants.INITIALIZE
    });
  },

  routeChanged: function(options) {
    if (options === undefined ||
      options.handler === undefined ||
      options.state === undefined) {
      throw new Error('handler and state must be specified');
    }

    AppDispatcher.dispatchAppAction({
      type: LifecycleConstants.ROUTE_CHANGED,
      handler: options.handler,
      state: options.state
    });
  }
};

module.exports = LifecycleActions;