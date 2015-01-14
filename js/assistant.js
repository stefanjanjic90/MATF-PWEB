var account = angular.module('accountModule', []);
		// cuvati username ulogovanog korisnika u globalnoj promenljivoj($scope.user)
account.controller('SecDutyController', function($scope, $http){
/*
    $scope.duty = []; // [course, assistant, date, time, remark]
  
    			$http.get('sporedna_dezurstva.php?user='+$scope.user, {responseType: 'JSON'}).
						success(function(data, status, headers, config){
							if(data!=="null")
								$scope.duty = angular.fromJson(data);
						}).
						error(function(data, status, headers, config){
							console.log("error: " + status);
						});
*/



  $scope.duty = [
    {	
			course: 'Prograimiranje za web', 
			assistant: 'Andjelka Zecevic', 
			date: '29.10.2014',
			time: '09:00',
			remark: '...'
		},
		{ 
			course: 'Razvoj softvera', 
			assistant: 'Andjelka Zecevic', 
			date: '29.10.2014',
			time: '09:00',
			remark: 'blavla'
		},
		{
			course: 'Uvod u organizaciju racunara',
			assistant: 'Andjelka Zecevic',
			date: '29.10.2014',
			time: '09:00h',
			classroom: 'Jagic',
			remark: ''
		}	
];

    $scope.toggle = function() {
        $scope.$broadcast('event:toggle');
    }
/*

    $scope.possibleRotate = []; // [lista asistenata koji su slobodni]
  
    			$http.get('slobodni_dezurni.php' //TODO: kako pamtiti parametre za pojedinacne kartice? predmet sa obaveze?, {responseType: 'JSON'}).
						success(function(data, status, headers, config){
							if(data!=="null")
								$scope.possibleRotate = angular.fromJson(data);
						}).
						error(function(data, status, headers, config){
							console.log("error: " + status);
						});

  */
		$scope.possibleRotate = ["Ivana Tanasijevic", "Mirko Spasic"];


}).directive('toggle', function() {
    return function(scope, elem, attrs) {
        scope.$on('event:toggle', function() {
            elem.slideToggle(1000); //animate({width: 'toggle'}, 3000, "swing");
        });
    };
});

account.controller('PrimDutyController', function($scope, $http){
/*
    $scope.duty = []; // [course, assistants, date, time, remark]

    			$http.get('glavna_dezurstva.php?user='+$scope.user, {responseType: 'JSON'}).
						success(function(data, status, headers, config){
							if(data!=="null")
								$scope.duty = angular.fromJson(data);
						}).
						error(function(data, status, headers, config){
							console.log("error: " + status);
						});
  
*/

    $scope.duty = [
				{	
				course: 'Prograimiranje za web', 
				assistants: ['Andjelka Zecevic', 'Tijana Kostic'],
				date: '29.10.2014',
				time: '09:00',
				remark: '...'
			},
			{ 
				course: 'Razvoj softvera', 
				assistants: ['Andjelka Zecevic', 'Mirko Petrovic'],
				date: '29.10.2014',
				time: '09:00',
				remark: 'blavla'
			},
			{
				course: 'Uvod u organizaciju racunara',
				assistants: ['Andjelka Zecevic', 'Sanja Tadic'],
				date: '29.10.2014',
				time: '09:00h',
				classroom: 'Jagic',
				remark: '',
			}	
				];

});

account.controller('NewDutyController', function($scope, $http){
/*
  $http.get('json/smerovi.json', {responseType: 'JSON'}).success(function(data){  //TODO proslediti .php
    $scope.departure = angular.fromJson(data);
    
  
    // predmeti koje drzi asistent u tekucoj godini

    			$http.get('predmeti_asistenta.php?user='+$scope.user, {responseType: 'JSON'}).
						success(function(data, status, headers, config){
							if(data!=="null")
								$scope.course = angular.fromJson(data);
						}).
						error(function(data, status, headers, config){
							console.log("error: " + status);
						});

    
  $http.get('json/ucionice.json', {responseType: 'JSON'}).success(function(data){  //TODO proslediti .php
    $scope.classrooms = angular.fromJson(data);
  
    
  $http.get('json/assistants.json', {responseType: 'JSON'}).success(function(data){  //TODO proslediti .php
    $scope.assistants = angular.fromJson(data);

*/

$scope.departure = [
	'Информатика',
	'Рачунарство и информатика',
	'Математика',
	'Професор математике и рачунарства',
	'Теоријска математика и примене',
	'Примењена математика',
	'Статистика, актуарска и финансијска математика',
	'Астрономија',
	'Рачунарска механика и астродинамика',
	'Астрофизика',
	'Астроинформатика'
];


$scope.course = [
	'Razvoj softvera',
	'Informacioni sistemi',
	'...'
];


$scope.classrooms = [
	'Ucionica 1',
	'Ucionica 2',
	'Ucionica 3',
	'Ucionica 4',
	'Ucionica 5',
	'Ucionica 6',
	'Ucionica 7',
	'Ucionica 8',
	'Ucionica 9',
	'Ucionica 10'		
];


$scope.assistants = [
	'Mirko Spasic',
	'Ana Spasic',
	'...'
];

  
});


account.controller('CompletedDutyController', function($scope, $http){

/*
    $scope.compDuty = []; //[course, date, duration]
  
    			$http.get('prethodna_dezurstva.php?user='+$scope.user, {responseType: 'JSON'}).
						success(function(data, status, headers, config){
							if(data!=="null")
								$scope.compDuty = angular.fromJson(data);
						}).
						error(function(data, status, headers, config){
							console.log("error: " + status);
						});
  
*/

$scope.compDuty = [
	{
		course: 'Programiranje za web',
		date: '29.10.2104',
		duration: '10h'
	},
	{
		course: 'Развој софтвера', 
		date: '10.05.2014', 
		duration: '02h'
	},
	{
		course: 'Развој софтвера', 
		date: '10.05.2014', 
		duration: '02h'
	}
	];
	

});

account.controller('UserOfferController', function($scope, $http){
/*
	$scope.offer = []; // [asistent_koji_salje, predmet, datum, vreme]
		
	    			$http.get('ponude_dezurstava.php?user='+$scope.user, {responseType: 'JSON'}).
						success(function(data, status, headers, config){
							if(data!=="null")
								$scope.offer = angular.fromJson(data);
						}).
						error(function(data, status, headers, config){
							console.log("error: " + status);
						});
*/

$scope.offer = [
	{
		assistant: 'Tijana Kostic',
		course: 'Programiranje za web',
		date: '29.10.2104',
		time: '09:00-10:00'
	},
	{
		assistant: 'Tijana Kostic',
		course: 'Развој софтвера', 
		date: '10.05.2014', 
		time: '09:00-10:00'
	},
	{
		assistant: 'Tijana Kostic',
		course: 'Развој софтвера', 
		date: '10.05.2014', 
		time: '09:00-10:00'
	}
	];
});


account.controller('CommentsController', function($scope, $http){
/*
	$scope.comments = [];  //[komentar, asistent, predmet, datum]
	  
    			$http.get('komentari.php?user='+$scope.user, {responseType: 'JSON'}).
						success(function(data, status, headers, config){
							if(data!=="null")
								$scope.comments = angular.fromJson(data);
						}).
						error(function(data, status, headers, config){
							console.log("error: " + status);
						});
	  
*/

$scope.comments = [	
	{
		comment: '...',
		assistant: 'TIjana',
		course: 'Neki kurs',
		date: '29.10.2014'	
	}

];

});

/*
account.controller('NewDutyController',function($scope, $http){
/*	 
  	
  /*$(function () {
		$('#selectDatum').datetimepicker({
					pickTime: false
				});
			});
			
  $(function () {
   $('#timepicker1').datetimepicker({
          pickDate: false
        });
      });

  $(function () {
   $('#timepicker2').datetimepicker({
          pickDate: false
        });
      });		
});


*/



	
