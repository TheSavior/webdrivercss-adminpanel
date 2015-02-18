'use strict';

require('./polyfills/Object.assign');

var React = require('react');
var Router = require('react-router');
var LifecycleActions = require('./actions/LifecycleActions');

var routes = require('./Routes');

var ApiHelper = require('./utils/ApiHelper');

LifecycleActions.initialize();
ApiHelper.getBranches();

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.body);
});
