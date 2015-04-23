var app = angular.module('weatherApp');

app.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService) {

	$scope.getCity = function() {
		$scope.city = cityService.getCity();
	};

	$scope.getCity();

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

}]);