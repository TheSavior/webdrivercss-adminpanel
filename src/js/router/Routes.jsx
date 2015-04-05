'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteConstants = require('../constants/RouteConstants');

var DiffList = require('../components/DiffList');
var Intro = require('../components/Intro');
var App = require('../components/App');

module.exports = (
  <Route name={RouteConstants.ROOT} path='/' handler={App}>
    <Route name={RouteConstants.BUILD} path='/:project/:build' handler={DiffList} />
    <DefaultRoute name={RouteConstants.INTRO} handler={Intro} />
  </Route>
);