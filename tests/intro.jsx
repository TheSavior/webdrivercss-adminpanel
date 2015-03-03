'use strict';

var assert = require('assert');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('component/Intro', function() {
  var Intro = require('../src/js/components/Intro');

  it('should have an element with class introduction', function() {
    var intro = TestUtils.renderIntoDocument(
      <Intro />
    );

    var introElement;

    assert.doesNotThrow(function() {
      introElement = TestUtils.findRenderedDOMComponentWithClass(intro, 'introduction');
    });

    assert(introElement.getDOMNode().className === 'introduction');
  });
});
