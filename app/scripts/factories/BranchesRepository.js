'use strict';

angular.module('webdrivercssAdminpanelApp').factory('BranchesRepository', function(API_HOST, API_PORT, $q, $http) {

    var deferred  = $q.defer(),
        method = 'GET',
        url = '/api/getBranches';

    $http({method: method, url: url }).success(function(branches) {
        deferred.resolve(branches);
    }).error(function() {

        deferred.reject();

    });

    return deferred.promise;

});
