'use strict';

var React = require('react');
var Link = require('react-router').Link;
var RouteConstants = require('../constants/RouteConstants');

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="header">
        <img src="/img/webdriverio.png" className="pull-right" alt="" />
        <h3 className="text-muted"><Link to={RouteConstants.ROOT}>WebdriverCSS Adminpanel</Link></h3>
      </div>
    );
  }
});

module.exports = Navbar;
