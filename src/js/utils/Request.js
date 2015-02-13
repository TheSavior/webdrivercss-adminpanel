'use strict';

var Request = {
  get: function(url) {
    return new Promise(function(resolve, reject) {

      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject(request);
        }
      };

      request.onerror = function(err) {
        reject(err);
      };

      request.send();

    });
  }
};


module.exports = Request;
