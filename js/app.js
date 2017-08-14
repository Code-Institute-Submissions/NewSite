angular.module('Candyland', ['ngRoute', 'RouteControllers']);
 
angular.module('Candyland').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl : '/templates/home.html',
    })
    .when('/home', {
        templateUrl : '/templates/home.html',
    })
    .when('/packages', {
        templateUrl : '/templates/packages.html',
    })
    .when('/gallery', {
        templateUrl : '/templates/gallery.html',
    })
    .when('/sweetlist', {
        templateUrl : '/templates/sweetlist.html',
    })
    .when('/bookings', {
        templateUrl : '/templates/bookings.html',
    });
});