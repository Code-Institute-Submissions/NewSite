angular.module('Candyland', ['ngRoute', 'RouteControllers', 'UserService', 'BookingDataApi']);
 
angular.module('Candyland').config(function($routeProvider) {
    $locationProvider.html5Mode(false); 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('packages', {
        templateUrl: 'templates/packages.html'
    })
    .when('gallery', {
        templateUrl: 'templates/gallery.html'
    })
    .when('sweetlist', {
        templateUrl: 'templates/sweetlist.html'
    })
    .when('bookus', {
        templateUrl: 'templates/bookus.html',
        controller: 'BookingController'
    }).when('confirm', {
        templateUrl: 'templates/bookingsuccess.html',
        controller: 'BookingConfirmationController'
    });
});
