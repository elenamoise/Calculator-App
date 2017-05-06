(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
           templateUrl: 'view/home.html'
          
      })
      .when('/view1', {
           templateUrl: 'view/view1.html'
          
      })
      .when('/view2', {
           templateUrl: 'view/view2.html'
      })

      .when('/about', {
           templateUrl: 'view/about.html'
      })
      .otherwise({redirectTo : '/'});
  });

}());