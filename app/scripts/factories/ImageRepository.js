'use strict';

angular.module('webdrivercssAdminpanelApp').factory('ImageRepository', function(API_HOST, API_PORT, $q, $route, $http) {

    var params = $route.current.params;
    var branch = params.branchName;



    var deferred  = $q.defer(),
        method = 'GET',
        url = '/api/getDiffs';

    $http({
        method: method,
        url: url,
        params: {
            branchName: branch
        }
    }).success(function(branches) {
        deferred.resolve(branches);
    }).error(function() {

        deferred.reject();

    });

    return deferred.promise;

});
