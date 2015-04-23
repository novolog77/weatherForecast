var app = angular.module('weatherApp');

app.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl:'directives/templates/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@' 
		}
	}
});