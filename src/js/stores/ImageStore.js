'use strict';

var assert = require('chai').assert;
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ImageConstants = require('../constants/ImageConstants');

var CHANGE_EVENT = 'change';

var _projects = {};

function setBuildInfo(options) {
  assert.isObject(options);
  assert.isString(options.project);
  assert.isString(options.build);
  assert.isString(options.status);
  assert.isObject(options.diffs);

  if(!_projects[options.project]) {
    _projects[options.project] = {};
  }

  _projects[options.project][options.build] = options;
}

var ImagesStore = Object.assign(EventEmitter.prototype, {
  getBuildInfo: function(options) {
    assert.isObject(options);
    assert.isString(options.project);
    assert.isString(options.build);

    if (!_projects[options.project]) {
      return undefined;
    }

    return _projects[options.project][options.build];
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
    case ImageConstants.SET_DIFFS:
      setBuildInfo(payload.options);
      break;
    default:
      return true;
  }

  ImagesStore.emitChange();

  return true;
});

module.exports = ImagesStore;
