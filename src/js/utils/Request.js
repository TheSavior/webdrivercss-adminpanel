'use strict';

function serializeQueryParams(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }

  if (str.length === 0) {
    return '';
  }

  return '?'+str.join('&');
}

var Request = {
  get: function(url, data) {
    return new Promise(function(resolve, reject) {
      data = data || {};
      var queryString = serializeQueryParams(data);

      var request = new XMLHttpRequest();
      request.open('GET', url + queryString, true);

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
