angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "home";
    })
    .controller('PackageController', function($scope) {
        $scope.title = "packages";
    })
    .controller('Gallery', function($scope) {
        $scope.title = "gallery";
    })
    .controller('Sweetlist', function($scope) {
        $scope.title = "sweetlist";
    })
    .controller('RegisterController', function($scope, UserAPIService) {
        $scope.registrationUser = {};

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
 
            console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
        };
    });

