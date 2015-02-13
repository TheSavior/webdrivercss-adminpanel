'use strict';

var React = require('react');

var BranchList = React.createClass({
  propTypes: {
    branches: React.PropTypes.array.isRequired
  },

  render: function() {
    var hasBranches = this.props.branches.length !== 0;

    var noBranchAlert = (
      <div className="alert alert-warning">
        <h4>No image repositories were found!</h4>
      </div>
    );

    var branchSelector = (
       <div className="alert alert-warning">
        <h4>All the branches</h4>
      </div>
    );

    return hasBranches ? branchSelector : noBranchAlert;
  }
});

module.exports = BranchList;
