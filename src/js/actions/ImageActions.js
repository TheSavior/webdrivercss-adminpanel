'use strict';

var assert = require('chai').assert;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ImageConstants = require('../constants/ImageConstants');

var ImageActions = {
  setDiffs: function(options) {
    assert.isObject(options);
    assert.isString(options.project);
    assert.isString(options.build);
    assert.isString(options.status);
    assert.isObject(options.diff);

    AppDispatcher.dispatchServerAction({
      type: ImageConstants.SET_DIFFS,
      options: options
    });
  }
};

module.exports = ImageActions;
