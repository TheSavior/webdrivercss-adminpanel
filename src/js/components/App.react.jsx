'use strict';

var React = require('react');
var Navbar = require('./Navbar');
var BranchList = require('./BranchList');
var ImageStore = require('../stores/ImageStore');

function getState() {
  return {
    branches: ImageStore.getBranches()
  };
}

var App = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    ImageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ImageStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="container" ng-view="">
        <Navbar />
        <BranchList branches={this.state.branches} />
      </div>
      // <Navbar source={this.state.feed} />
    );
  },

  _onChange: function() {
    this.setState(getState());
  },
});

module.exports = App;
