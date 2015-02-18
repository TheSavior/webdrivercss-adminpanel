'use strict';

require('./polyfills/Object.assign');

var React = require('react');
var Router = require('react-router');
var LifecycleActions = require('./actions/LifecycleActions');

var ApiHelper = require('./utils/ApiHelper');

var RouterContainer = require('./router/RouterContainer');
var routes = require('./router/Routes');

LifecycleActions.initialize();
ApiHelper.getBranches();

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

RouterContainer.set(router);

router.run(function (Handler, state) {
  LifecycleActions.routeChanged({
    handler: Handler,
    state: state
  });

  React.render(<Handler />, document.body);
});