'use strict';

require('./polyfills/Object.assign');

var React = require('react');
var LifecycleActions = require('./actions/LifecycleActions');
var App = React.createFactory(require('./components/App.react.jsx'));

var ApiHelper = require('./utils/ApiHelper');

LifecycleActions.initialize();
ApiHelper.getBranches();
React.render(new App(), document.body);
