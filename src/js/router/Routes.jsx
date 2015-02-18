'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var DiffList = require('../components/DiffList');
var Intro = require('../components/Intro');

var App = require('../components/App');

module.exports = (
  <Route name='root' path='/' handler={App}>
    <Route name='branch' path='/branch/:branchName' handler={DiffList} />
    <DefaultRoute name='intro' handler={Intro} />
  </Route>
);