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
    .controller('BookingController', ['$scope', '$location', function($scope, $location){
        $scope.submitForm = function(){
            $location.path('bookingsuccess');
        };
    }]);
};



