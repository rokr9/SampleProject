angular.module("sportsStoreAdmin").constant("authUrl", "http://localhost:2403/users/login")
.controller("authCtrl", function($scope, $http, authUrl, $location){
	$scope.authenticate = function(user, pass){
		$http.post(authUrl, {
			username : user, 
			password: pass
		},{
			withCredentials: true
		}).success(function(data){
			$location.path("/main");
		}).error(function(error){
			$scope.authenticationError = error;
		});
	}
});