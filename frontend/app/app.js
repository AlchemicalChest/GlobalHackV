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
      //window.alert(response);
      //$scope.lastnames = response.lastName;
    },
  function(response) {
    //window.alert(JSON.stringify(response));
    //$scope.lastnames = "N/A";
  });
});

app.controller('detailViewCtrl', function($scope, $http) {
  $http.get("http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/citation?citationNumber=137757292")
    .then(function (response) {
      $scope.violations = response[0].violations;
      $scope.defendant = response[0].defendant;
      $scope.citationDate = response[0].citationDate;
      $scope.courtLocation = response[0].court_location;
      $scope.courtAddress = response[0].court_address;

      //window.alert(response);
      //$scope.lastnames = response.lastName;
    },
    function(response) {
      //window.alert(JSON.stringify(response));
      //$scope.lastnames = "N/A";
    });
});
