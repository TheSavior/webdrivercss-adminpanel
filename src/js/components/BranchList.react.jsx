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

    var branchListItems = this.props.branches.map(function(branchName) {
      return <li><a href={"/branch/" + branchName}>{branchName}</a></li>;
    });

    var branchSelector = (
      <nav className="navbar navbar-default navbar-repository" role="repository-navigation" ng-show="!noReposFound">
        <div className="dropdown">
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown">Choose Regression Repository <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            {branchListItems}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <a className="navbar-toggle dropdown-toggle collapsed" data-toggle="dropdown" data-target=".navbar-nav .dropdown">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </a>
      </nav>
    );

    return hasBranches ? branchSelector : noBranchAlert;
  }
});

module.exports = BranchList;
