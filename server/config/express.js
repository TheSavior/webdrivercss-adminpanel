'use strict';

var compression = require('compression');

module.exports = function(app) {
  var env = app.get('env');

  if (env === 'production') {
    app.use(compression());
  }
};
