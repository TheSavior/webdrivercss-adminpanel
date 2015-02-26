'use strict';

var React = require('react');
var Highlight = require('react-highlight');

var Intro = React.createClass({
  render: function() {
    return (
      <div className="introduction">
        <h2>Howdy,</h2>
        <p>
          and congratulations. You've successfully set up the WebdriverCSS Adminpanel. Now you can start with your CSS regression tests. This Application will help you to get an overview of all made screenshots of your project.
        </p>
        <p>
            To get started just the type your project name into the input field and copy the source code below into a test file and execute it.
        </p>

        <label htmlFor="projectname" style={{marginTop: 20}}>Your Project Name</label>
        <input type="text" id="projectname" className="form-control" placeholder="myProject" />

        <label htmlFor="projecturl" style={{marginTop: 20}}>Your Project URL</label>
        <input type="text" id="projecturl" className="form-control" placeholder="http://example.com" />

        <Highlight className="javascript">
        </Highlight>

        <p>
          For more information on how to install and use <a href="https://github.com/webdriverio/webdrivercss">WebdriverCSS</a>
           and <a href="http://webdriver.io">WebdriverIO</a> please checkout their project website or GitHub repositories.
        </p>
      </div>
    );
  }
});

module.exports = Intro;
