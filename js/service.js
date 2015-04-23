var app = angular.module('weatherApp');

app.service('cityService', function($http, $q) {

	this.city = 'New York, NY';

	this.getCity = function() {
		return this.city;
	};

	this.getWeather = function(city, days) {
		var dfd = $q.defer();
		$http({
			method: 'GET', 
			url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=' + days 
		}).then(function(response) {
			var relevant = response.data.list;
			console.log(relevant);
			dfd.resolve(relevant);
		});
		return dfd.promise;
	};

	this.convertToFahrenheit = function(degk) {
		return Math.round((1.8 * (degk - 273)) + 32);
	};

	this.convertToDate = function(dt) {
		return new Date(dt * 1000);
	};

});