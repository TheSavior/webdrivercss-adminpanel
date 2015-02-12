'use strict';

angular.module('webdrivercssAdminpanelApp').controller('DiffCtrl', function ($scope, images, $routeParams) {
    // $scope.diffs = images;
    console.log(images);
    $scope.diffs = images.files;

    if($routeParams.branchName) {
    //     $scope.dir   = $routeParams.branchName;

    //     // $scope.shots = repositories[$routeParams.id].images;
    }

    // angular.forEach($scope.diffs, function(diff) {
    //     $scope.shots.splice($scope.shots.indexOf(diff.replace(/diff/,'regression')),1);
    //     $scope.shots.splice($scope.shots.indexOf(diff.replace(/diff/,'baseline')),1);
    // });

});
