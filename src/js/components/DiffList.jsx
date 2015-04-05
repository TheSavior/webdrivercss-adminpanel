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
      project: undefined,
      build: undefined,
      buildInfo: undefined,
    };
  },

  componentWillMount: function() {
    this.state.project = RouteStore.getState().params.project;
    this.state.build = RouteStore.getState().params.build;
    this.state.buildInfo = ImageStore.getBuildInfo({
      project: this.state.project,
      build: this.state.build
    });

    if (this.state.buildInfo === undefined) {
      ApiHelper.getDiffsForBuild({
        project: this.state.project,
        build: this.state.build
      });

      return;
    }
  },

  approve: function() {
    ApiHelper.approveBuild({
      project: this.state.project,
      build: this.state.build
    });
  },

  render: function() {
    this.state.buildInfo = ImageStore.getBuildInfo({
      project: this.state.project,
      build: this.state.build
    });

    if (!this.state.buildInfo) {
      return null;
    }

    var diffs = this.state.buildInfo.diffs;

    return (
      <div>
        {
          Object.keys(diffs).map((function(browserName) {
            return (
              <div key={browserName} className="panel panel-default diffs">
                <div className="panel-heading">
                  <h3 className="panel-title">{browserName}</h3>
                </div>
                <div className="panel-body">
                  {
                    diffs[browserName].map((function(fileName) {
                      var headImage = Path.join('api', 'image', this.state.project, this.state.buildInfo.head, browserName, fileName);
                      var baseImage = Path.join('api', 'image', this.state.project, this.state.buildInfo.base, browserName, fileName);
                      return (
                        <div key={fileName} className="panel panel-default diffs">
                          <div className="panel-heading">
                            <h3 className="panel-title">{fileName}</h3>
                          </div>
                          <div className="panel-body">
                            <img src={'http://0.0.0.0:9000/'+Path.join('api', 'diff', this.state.project, this.state.build, browserName, fileName)} />
                            <DiffSlider image1Url={'http://0.0.0.0:9000/'+headImage} image2Url={'http://0.0.0.0:9000/'+baseImage} />
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

        <button onClick={this.approve} type="button" className="btn btn-success pull-right">Approve</button>
      </div>
    );
  }
});

module.exports = DiffList;
