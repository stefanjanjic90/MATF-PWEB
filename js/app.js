var app = angular.module('Application', []);

app.controller('AppointmentsController', function($scope, $http){
	
		$scope.tableOfDuty = []; //tableOfDuty [datum, vreme, ucionice, kurs, glavni dezurni]
		$scope.msg = "";

		  $http.get('zakazane_obaveze.php', {responseType: 'JSON'}).success(function(data){
    		$scope.tableOfDuty = angular.fromJson(data);
   			}).error(function(data, status, headers, config){
							$scope.msg=status+": an error occured";	});
							
		$scope.tableofDuty = [{date: '29.10.2014', time: '09:00-10:00', classrooms:['uci1, uci2'], course: 'Razvoj softvera', assistant:'Neko Neko'}];
});

app.controller('HoursOnCallController', function($scope, $http){

	$scope.totalHoursOfDuty = [];
	$scope.msg = "";
	//totalHoursOfDuty [ime asistenta, broj sati dezurstva]
    	$http.get('sati_dezuranja.php', {responseType: 'JSON'}).success(function(data){
    		$scope.totalHoursOfDuty = angular.fromJson(data);    		
	}).error(function(data, status, headers, config){
							$scope.msg=status+": an error occured";	});

	
});

/*
app.controller('LogInController', function($scope, $http){

//TODO: logovanje, prikazivanje sadrzaja u zavisnosti od tipa korisnika(asistent,..) (asistent.html, glavni_organizator.html..)

	$scope.logIn = function()
	{
		
	}

});*/
