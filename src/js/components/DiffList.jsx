'use strict';

var React = require('react');
var ImageStore = require('../stores/ImageStore');
var RouteStore = require('../stores/RouteStore');
var ApiHelper = require('../utils/ApiHelper');
var DiffSlider = require('./DiffSlider');
var Path = require('path');

var DiffList = React.createClass({
  getInitialState: function() {
    return {
      branchName: undefined
    };
  },

  componentWillMount: function() {
    this.state.branchName = RouteStore.getState().params.branchName;
    var images = ImageStore.getDiffsForBranch(this.state.branchName);

    if (images === undefined) {
      ApiHelper.getDiffsForBranch(this.state.branchName);
      return;
    }
  },

  render: function() {
    var diffs = ImageStore.getDiffsForBranch(this.state.branchName);

    if (!diffs) {
      return null;
    }

    return (
      <div>
      {
        diffs.browsers.map((function(browserName) {
          return (
            <div key={browserName} className="panel panel-default diffs">
              <div className="panel-heading">
                <h3 className="panel-title">{browserName}</h3>
              </div>
              <div className="panel-body">
                {
                  diffs.files.map((function(fileName) {
                    var branchImage = Path.join('api', 'image', this.state.branchName, browserName, fileName);
                    var masterImage = Path.join('api', 'image', 'master', browserName, fileName)
                    return (
                      <div key={fileName} className="panel panel-default diffs">
                        <div className="panel-heading">
                          <h3 className="panel-title">{fileName}</h3>
                        </div>
                        <div className="panel-body">
                          <img src={'http://0.0.0.0:9000/'+Path.join('api', 'diff', this.state.branchName, browserName, fileName)} />
                          <DiffSlider image1Url={'http://0.0.0.0:9000/'+branchImage} image2Url={'http://0.0.0.0:9000/'+masterImage} />
                        </div>
                      </div>
                    );
                  }).bind(this))
                }
              </div>
            </div>
          );
        }).bind(this))
      }
      </div>
    );
  }
});

// <div class="panel panel-default diffs" ng-repeat="diff in diffs">
      //   <div class="panel-heading"><h3 class="panel-title">{{ diff.split('.').slice(0,-2).join(' ') }}</h3></div>
      //   <div class="panel-body">
      //     // <imagediff diff="diff" project="dir" />
      //   </div>
      // </div>
      // <div>foo</div>

module.exports = DiffList;
