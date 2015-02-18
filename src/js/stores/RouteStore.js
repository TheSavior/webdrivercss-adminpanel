'use strict';

var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var LifecycleConstants = require('../constants/LifecycleConstants');

var CHANGE_EVENT = 'change';

var _handler;
var _state;

var RouteStore = Object.assign(EventEmitter.prototype, {

  getHandler: function() {
    return _handler;
  },

  getState: function() {
    return _state;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register to handle all updates
AppDispatcher.register(function(action) {
  var payload = action.payload;

  switch (payload.type) {
    case LifecycleConstants.ROUTE_CHANGED:
      _handler = payload.handler;
      _state = payload.state;
      break;
    default:
      return true;
  }

  RouteStore.emitChange();

  return true;
});

module.exports = RouteStore;
