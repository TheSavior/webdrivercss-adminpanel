'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Navbar = require('./components/Navbar');

var App = require('./components/App');

module.exports = (
  <Route name='root' path='/' handler={App}>
    <Route name='branch' path='/branch/:branchName' handler={Navbar} />
  </Route>
);