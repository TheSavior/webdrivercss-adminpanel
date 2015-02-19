'use strict';

var React = require('react');

var Navbar = React.createClass({
  componentWillReceiveProps: function(nextProps) {
    console.log('prop', nextProps);
  },

  render: function() {
    return (
      // <div class="panel panel-default diffs" ng-repeat="diff in diffs">
      //   <div class="panel-heading"><h3 class="panel-title">{{ diff.split('.').slice(0,-2).join(' ') }}</h3></div>
      //   <div class="panel-body">
      //     // <imagediff diff="diff" project="dir" />
      //   </div>
      // </div>
      <div>foo</div>
    );
  }
});

module.exports = Navbar;
