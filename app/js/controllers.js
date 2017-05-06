(function() {

  "use strict";

  var App = angular.module("App.controllers", []);

  App.controller('navCtrl', function ($location, $scope) {
    $scope.currentPage = "home";
    $scope.go = function (page) {
      $location.path('/' + page);
    };
  });

  App.controller("homeCtrl", ["$scope", function($scope){

  }]);

  App.controller("aboutCtrl", ["$scope", function($scope){

  }]);


  App.controller("simpleInterestCalculator", ["$scope", function ($scope, UtilSrvc){

    $scope.amount = 0;
    $scope.rate = 0;
    $scope.years = 0;
    $scope.result = function () {
     $scope.simpleInterest = ($scope.amount * $scope.rate * $scope.years)/100;
   };

  }]);

  App.controller("compoundInterestCalculator", ["$scope", function($scope){
    $scope.principal = 0;
    $scope.rate = 0;
    $scope.time = 0;
    $scope.nrOfCompounding = 0;
    $scope.total = function(){
      $scope.grandTotal = ($scope.principal * Math.pow((1 + ($scope.rate / ($scope.nrOfCompounding*100))),($scope.nrOfCompounding*$scope.time)));
      
    }
    $scope.interest = function(){
      $scope.interestOnly = $scope.grandTotal - $scope.principal;
      
    };
  }]);

}());


	// Calling a controller function from outside
	function calculate(){
		var scope = angular.element(document.getElementById("simple")).scope();
		scope.$apply(function () {
      scope.result();
    });
	};

	function calculate2(){
		var scope = angular.element(document.getElementById("getValue")).scope();
		scope.$apply(function () {
      scope.total();
      scope.interest();
    });
	};