'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="header">
        <img src="/img/webdriverio.png" className="pull-right" alt="" />
        <h3 className="text-muted"><Link to="root">WebdriverCSS Adminpanel</Link></h3>
      </div>
    );
  }
});

module.exports = Navbar;
