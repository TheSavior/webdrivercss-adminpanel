'use strict';

var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ImageConstants = require('../constants/ImageConstants');

var CHANGE_EVENT = 'change';

var _branches = [];

function setBranches(branches) {
  _branches = branches;
}

var ImagesStore = Object.assign(EventEmitter.prototype, {

  getBranches: function() {
    return _branches;
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
    case ImageConstants.SET_BRANCHES:
      setBranches(payload.branches);
      break;
    default:
      return true;
  }

  ImagesStore.emitChange();

  return true;
});

module.exports = ImagesStore;
