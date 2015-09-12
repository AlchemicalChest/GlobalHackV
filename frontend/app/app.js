'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/user/1")
    .then(function (response) {
      $scope.lastnames = response.lastName;
    },
  function(response) {
    $scope.lastnames = "N/A";
  });
});
