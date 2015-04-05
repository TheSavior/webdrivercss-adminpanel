'use strict';

var RouteHandler = require('react-router').RouteHandler;

var React = require('react');
var Navbar = require('./Navbar');
var ImageStore = require('../stores/ImageStore');

function getState() {
  return {

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
      <div className="container">
        <Navbar />
        <RouteHandler/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getState());
  },
});

module.exports = App;
