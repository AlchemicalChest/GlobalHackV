'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($scope, $http) {
    //$http.get("http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/user/1")
    //  .success(function (response) {
    //    $scope.theLastname = response.lastname;
    //    window.alert(response);
    //  });
    $scope.ln = $http.get("http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/user/1");
    $scope.theLastname = function() {
      //$http.get("http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/user/1")
      //  .success(function (response) {
      //    //$scope.theLastname = response.lastname;
      //    window.alert(response);
          return $scope.ln;
        }

}]);

//.controller('View1Ctrl', [function($scope, $http) {
//  $http.get("http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/user/1")
//    .success(function (response) {$scope.theLastname = response.lastname;});
//}]);
