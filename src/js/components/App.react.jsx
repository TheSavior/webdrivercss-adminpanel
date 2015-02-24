'use strict';

// var RouteHandler = require('react-router').RouteHandler;

var React = require('react');
var Navbar = require('./Navbar');
var BranchList = require('./BranchList');
var ImageStore = require('../stores/ImageStore');
var RouteStore = require('../stores/RouteStore');

var RouteConstants = require('../constants/RouteConstants');

var DiffList = require('../components/DiffList');
var Intro = require('../components/Intro');

function getState() {
  return {
    branches: ImageStore.getBranches(),
    routes: RouteStore.getRouteNames().shift()
  };
}

var App = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    ImageStore.addChangeListener(this._onChange);
    RouteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ImageStore.removeChangeListener(this._onChange);
    RouteStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var PageComponent;
    var childRoutes = this.state.routes.shift();

    switch (this.state.routes.get(0)) {
      case RouteConstants.BRANCH:
        PageComponent = <DiffList routes={childRoutes} />;
        break;
      case RouteConstants.INTRO:
        PageComponent = <Intro routes={childRoutes} />;
        break;
      default:
        throw new Error('Missing Pages');
    }

    return (
      <div className="container">
        <Navbar />
        <BranchList branches={this.state.branches} />
        {PageComponent}
      </div>
    );
  },

  _onChange: function() {
    this.setState(getState());
  },
});

module.exports = App;
