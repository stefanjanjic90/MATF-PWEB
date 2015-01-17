var app = angular.module('Application', []);



app.controller('AppointmentsController', function($scope, $http){
	
		$scope.tableOfDuty = []; //tableOfDuty [datum, vreme, ucionice, kurs, opis_obaveze, glavni dezurni]
		$scope.msg = "";

		  $http.get('zakazane_obaveze.php', {responseType: 'JSON'}).success(function(data){
    		$scope.tableOfDuty = angular.fromJson(data);
   			}).error(function(data, status, headers, config){
							$scope.msg=status+": an error occured";	});
							
		$scope.tableOfDuty = [
		{date: '29.12.2014', time: '09:00-10:00', classrooms:['uci1, uci2'], course: 'Razvoj softvera',desc: 'Opis', assistant:'Neko Neko'},
		{date: '29.10.2014.', time: '09:00-10:00', classrooms:['uci1, uci2'], course: 'Razvoj softvera',desc: 'Opis', assistant:'Neko Neko'}, 
		{date: '29.02.2014.', time: '09:00-10:00', classrooms:['uci1, uci2'], course: 'Razvoj softvera',desc: 'Opis', assistant:'Neko Neko'}];
});

app.controller('HoursOnCallController', function($scope, $http){

	$scope.totalHoursOfDuty = []; //totalHoursOfDuty [ime asistenta, broj sati dezurstva]
	$scope.msg = "";
	
	  	$http.get('sati_dezuranja.php', {responseType: 'JSON'}).success(function(data){
    		$scope.totalHoursOfDuty = angular.fromJson(data);    		
	}).error(function(data, status, headers, config){
							$scope.msg=status+": an error occured";	});

 $scope.totalHoursOfDuty = [{assistant: 'Andjelka Zecevic', hours:10},{assistant: 'Andjelka Zecevic', hours:11},{assistant: 'Andjelka Zecevic', hours:2}];

});


