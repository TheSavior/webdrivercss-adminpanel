'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('../components/App');
var NoOp = require('../components/NoOp');

var RouteConstants = require('../constants/RouteConstants');

module.exports = (
  <Route name={RouteConstants.ROOT} path='/' handler={App}>
    <Route name={RouteConstants.BRANCH} path='/branch/:branchName' handler={NoOp} />
    <DefaultRoute name={RouteConstants.INTRO} handler={NoOp} />
    <NotFoundRoute name={RouteConstants.NOT_FOUND} handler={NoOp} />
  </Route>
);