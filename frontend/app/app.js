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
      $scope.defendantName = response.data.firstName + " " + response.data.lastName;
      $scope.citations = response.data.citations;
        //window.alert(JSON.stringify(response));
    },
  function(response) {
    //window.alert(JSON.stringify(response));
    //$scope.lastnames = "N/A";
  });

  $http.get("http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/citation?citationNumber=137757292")
      .then(function (response) {
        //window.alert(JSON.stringify(response));
        $scope.violations = response.data[0].violations;
        $scope.defendant = response.data[0].defendant;
        $scope.citationDate = response.data[0].citationDate;
        $scope.courtLocation = response.data[0].court_location;
        $scope.courtAddress = response.data[0].court_address;
        $scope.courtDate = response.data[0].court_date;

        //var total = 0;
        //for (var i in response.data[0].violations) {
        //  total = total + parseInt(i.fineAmount);
        //  window.alert(total);
        //}
        //$scope.fineTotal = total;
        $scope.getTotal = function(){
          var total = 0;
          for(var i = 0; i < $scope.violations.length; i++){
            var product = $scope.violations[i].fineAmount;
            total += product;
          }
          return total;
        }

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
        //window.alert(JSON.stringify(response));
      $scope.violations = response.data[0].violations;
      $scope.defendant = response.data[0].defendant;
      $scope.citationDate = response.data[0].citationDate;
      $scope.courtLocation = response.data[0].court_location;
      $scope.courtAddress = response.data[0].court_address;

        //var total = 0;
        //for (var i in response.data[0].violations) {
        //  total = total + parseInt(i.fineAmount);
        //  window.alert(total);
        //}
        //$scope.fineTotal = total;
        $scope.getTotal = function(){
          var total = 0;
          for(var i = 0; i < $scope.violations.length; i++){
            var product = $scope.violations[i].fineAmount;
            total += product;
          }
          return total;
        }

      //window.alert(response);
      //$scope.lastnames = response.lastName;
    },
    function(response) {
      //window.alert(JSON.stringify(response));
      //$scope.lastnames = "N/A";
    });
});
