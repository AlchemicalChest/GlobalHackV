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
  //var request1 = "http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/user/" + userID;
  var request = "http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/user?firstName="+usrFirstName +"&lastName=" + usrLastName;

  var citationNumber;
  $http.get(request)
    .then(function (response) {
      //window.alert(response);
      $scope.defendantName = response.data[0].firstName + " " + response.data[0].lastName;
      $scope.citations = response.data[0].citations;
      citationNumber = response.data[0].citations[0].citationNumber;
        $scope.vW = response.data[0].volunteerWorks;
        //window.alert(JSON.stringify(response));
        //window.alert($scope.citationNum);
    },
  function(response) {
    //window.alert(JSON.stringify(response));
    //$scope.lastnames = "N/A";
  });
  //window.alert("1: " + $scope.citationNum);
  var request2 = "http://ec2-52-3-113-7.compute-1.amazonaws.com:1337/citation?citationNumber=" + 137757292;

  $http.get(request2)
      .then(function (response) {
        //window.alert(JSON.stringify(response));
        $scope.violations = response.data[0].violations;
        console.log(JSON.stringify($scope.violations));
        $scope.defendant = response.data[0].defendant;
        $scope.citationDate = response.data[0].citationDate;
        $scope.courtLocation = response.data[0].court_location;
        $scope.courtAddress = response.data[0].court_address;
        $scope.courtDate = response.data[0].court_date;


        $scope.communityServiceNumber = response.data[0].communityServiceNumber;
        $scope.description = response.data[0].description;
        $scope.supervisorID = response.data[0].supervisor;
        $scope.credit = response.data[0].credit;
        $scope.address = response.data[0].address;
        $scope.duration = response.data[0].duration;
        $scope.startedAt = response.data[0].startedAt;
        $scope.endedAt = response.data[0].endedAt;
        $scope.status = response.data[0].status;

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
