var app = angular.module("App", ["ngRoute"]);


app.config(function($routeProvider) {
  console.log("Angular");
  $routeProvider
    .when('/', {
      templateUrl: 'assets/js/app/views/main.html',
      controller: 'mainController'
    })
    .when('/404', {
      templateUrl: 'assets/js/app/views/404.html'
    })
    .otherwise({redirectTo:'/404'});
});
