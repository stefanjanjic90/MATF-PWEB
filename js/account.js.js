		var app=angular.module('Application', []);
		app.controller('HelloContoller', function($scope) {
			$scope.message={};
			$scope.message.text = "Hello world!";
		    $scope.name = "Tijana";
		});
		
	