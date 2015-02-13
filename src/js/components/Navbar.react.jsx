'use strict';

var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="header">
        <img src="/img/webdriverio.png" className="pull-right" alt="" />
        <h3 className="text-muted"><a href="/">WebdriverCSS Adminpanel</a></h3>
      </div>
    );
  }
});

module.exports = Navbar;
