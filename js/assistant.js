var account = angular.module('accountModule', []);
		// cuvati username ulogovanog korisnika u globalnoj promenljivoj($scope.user)
account.controller('SecDutyController', function($scope, $http){
/*
    $scope.duty = [];
  
    $http({
      method: 'get',
      url: 'sporedna_dezurstva.php', // prava adresa
      responseType: 'JSON',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
			params: { user: $scope.user }
    })
    .success(function(data, status, headers, config){
      if(data != null)
      	$scope.duty = angular.fromJson(data)
      console.log("success: " + status);
      //console.log(data);
    })
    .error(function(data, status, headers, config){
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

    $scope.possibleRotate = [];
  
    $http({
      method: 'get',
      url: 'slobodni_dezurni.php', // prava adresa
      responseType: 'JSON',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
			params: { user: $scope.user, course: TODO: kako pamtiti parametre za pojedinacne kartice? predmet sa obaveze? }
    })
    .success(function(data, status, headers, config){
      if(data != null)
      	$scope.possibleRotate = angular.fromJson(data)
      console.log("success: " + status);
      //console.log(data);
    })
    .error(function(data, status, headers, config){
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
    $scope.duty = [];
  
    $http({
      method: 'get',
      url: 'glavna_dezurstva.php', // prava adresa
      responseType: 'JSON',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
			params: { user: $scope.user }
    })
    .success(function(data, status, headers, config){
      if(data != null)
      	$scope.duty = angular.fromJson(data)
      console.log("success: " + status);
      //console.log(data);
    })
    .error(function(data, status, headers, config){
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
    $http({
      method: 'get',
      url: 'predmeti_asistenta.php', // prava adresa
      responseType: 'JSON',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
			params: { user: $scope.user }
    })
    .success(function(data, status, headers, config){
      if(data != null)
      	$scope.course = angular.fromJson(data)
      console.log("success: " + status);
      //console.log(data);
    })
    .error(function(data, status, headers, config){
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
    $scope.compDuty = [];
  
    $http({
      method: 'get',
      url: 'prethodna_dezurstva.php', // prava adresa
      responseType: 'JSON',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
			params: { user: $scope.user }
    })
    .success(function(data, status, headers, config){
      if(data != null)
      	$scope.duty = angular.fromJson(data)
      console.log("success: " + status);
      //console.log(data);
    })
    .error(function(data, status, headers, config){
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
	$scope.offer = [];
	// offer [asistent_koji_salje, predmet, datum, vreme]
	  $http({
      method: 'get',
      url: 'ponude_dezurstava.php', // prava adresa
      responseType: 'JSON',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
			params: { user: $scope.user }
    })
    .success(function(data, status, headers, config){
      if(data != null)
      	$scope.offer = angular.fromJson(data)
      console.log("success: " + status);
      //console.log(data);
    })
    .error(function(data, status, headers, config){
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
	$scope.comments = [];
	// comments [komentar, asistent, predmet, datum]
	  $http({
      method: 'get',
      url: 'komenatari.php', // prava adresa
      responseType: 'JSON',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
			params: { user: $scope.user }
    })
    .success(function(data, status, headers, config){
      if(data != null)
      	$scope.comments = angular.fromJson(data)
      console.log("success: " + status);
      //console.log(data);
    })
    .error(function(data, status, headers, config){
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



	
