angular.module('UserService', [])
    .factory('UserAPIService', function($http) {
 
        UserAPIService = {
            registerUser: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });

   angular.module('BookingDataApi', [])
    .factory('BookingDataApi', function() {
 
 		var bookingInfo  = {};

        BookingDataApi = {
            setBookingInfo: function(data) {
            	bookingInfo = data;
            },
            getBookingInfo: function(){
            	return bookingInfo;
            }
        };
        return BookingDataApi;
    });
