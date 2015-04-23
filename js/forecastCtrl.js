var app = angular.module('weatherApp');

app.controller('forecastCtrl', ['$scope', '$routeParams', 'cityService', function($scope, $routeParams, cityService) {

	$scope.getCity = function() {
		$scope.city = cityService.getCity();
	};

	$scope.getCity();

    $scope.days = $routeParams.days || '2';

	$scope.getWeather = function() {
    	cityService.getWeather($scope.city, $scope.days).then(function(data) {
    	$scope.weather = data;
    	});
    };

    $scope.getWeather();

    $scope.convertToFahrenheit = function(degk) {
        return cityService.convertToFahrenheit(degk);
    };

    $scope.convertToDate = function(dt) {
        return cityService.convertToDate(dt);
    };
	
}]);