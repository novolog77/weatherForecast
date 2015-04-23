var app = angular.module('weatherApp', ['ngRoute']);  

// ROUTES
app.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html', // path to template
		controller: 'homeCtrl' // no path, just the name of the controller
	})

	.when('/forecast', {
		templateUrl: 'pages/forecast.html', 
		controller: 'forecastCtrl' 
	})

	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.html', 
		controller: 'forecastCtrl'
	});

});