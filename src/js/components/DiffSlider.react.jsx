'use strict';

var React = require('react');

function loadImage(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();
    image.onload = function() {
      resolve({
        width: image.width,
        height: image.height,
        resource: image
      });
    };

    image.src = url;
  });
}

var dragging = false;

var DiffSlider = React.createClass({
  propTypes: {
    image1Url: React.PropTypes.string.isRequired,
    image2Url: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      divide: 0.32,
      image1: undefined,
      image2: undefined,
      width: 0,
      height: 0,
      scalingFactor: undefined
    };
  },

  componentWillMount: function() {
    Promise.all([
      loadImage(this.props.image1Url),
      loadImage(this.props.image2Url)])
    .then((function(results) {
      this.setState({
        image1: results[0],
        image2: results[1],
        width: results[0].width,
        height: results[0].height
      });
    }).bind(this));
  },

  componentDidMount: function() {
    var node = this.getDOMNode();
    node.addEventListener('mousedown', this.mousedown);
    node.addEventListener('mousemove', this.mousemove);
    node.addEventListener('mouseup', this.mouseup);
  },

  componentWillUnmount: function() {
    var node = this.getDOMNode();
    node.removeEventListener('mousedown', this.mousedown);
    node.removeEventListener('mousemove', this.mousemove);
    node.removeEventListener('mouseup', this.mouseup);
  },

  componentDidUpdate: function() {
    if (this.state.scalingFactor === undefined) {
      var node = this.getDOMNode();
      this.setState({
        scalingFactor: node.offsetWidth / this.state.width
      });
    }

    this.drawCanvas();
  },

  mousedown: function(e) {
    this.setState({
      divide: e.offsetX / this.state.width / this.state.scalingFactor
    });

    dragging = true;
  },

  mousemove: function(e) {
    if (dragging) {
      this.setState({
        divide: e.offsetX / this.state.width / this.state.scalingFactor
      });
    }
  },

  mouseup: function() {
    dragging = false;
  },

  render: function() {
    return (
      <canvas
        width={this.state.width}
        height={this.state.height}
        >
      </canvas>
    );
  },

  drawCanvas: function() {
    if (this.state.image1 === undefined || this.state.image2 === undefined) {
      return null;
    }

    var canvas = this.getDOMNode();

    var context = canvas.getContext('2d');

    var split = this.state.divide * canvas.width;

    context.drawImage(this.state.image2.resource, 0, 0);
    context.drawImage(this.state.image1.resource, 0, 0, split, canvas.height, 0, 0, split, canvas.height);

    context.fillStyle = 'rgb(220, 50, 50)';
    context.fillRect(split - 1, 0, 2, canvas.height);
  }
});

module.exports = DiffSlider;
