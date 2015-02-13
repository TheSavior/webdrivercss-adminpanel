'use strict';

var Path = require('path');
var Request = require('./Request');

var ImageActions = require('../actions/ImageActions');

var api = '/api/';

var ApiHelper = {
  getBranches: function() {
    Request.get(Path.join(api, 'getBranches'))
      .then(ImageActions.setBranches);
  }
};


module.exports = ApiHelper;
