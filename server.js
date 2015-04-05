'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.sendFile(path.join('dist', 'index.html'), {
    root: __dirname
  });
});

var server = app.listen(8282, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});