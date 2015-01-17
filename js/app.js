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

app.controller('indexControler', function($scope, $http) {
  
  // podaci o korisniku kad se uloguje...
  $scope.user = {};
  
  $scope.visible = false;
  
  $scope.logedIn = false; // ng-show za log_out div
  $scope.loged = function() {
    return $scope.logedIn;
  }
  
  // tabovi...
  $scope.tab = 1;
  $scope.setTab = function(t) {
    if(!isNaN(t) && t>0 /*&& t < 10*/)
      $scope.tab = t;
    else
      $scope.tab = 1;
  }
  $scope.returnTab = function() {
    return $scope.tab;
  }
  
  
  // u kom modu se korisnik uloguje
  $scope.asistent = false;
  $scope.administrator = false;
  $scope.glavni_organizator = false;
  
  // vracamo mod za svakog
  $scope.asist = function() {
    return $scope.asistent;
  }
  $scope.admin = function() {
    return $scope.administrator;
  }
  $scope.glavni_org = function() {
    return $scope.glavni_organizator;
  }
  
  $scope.setVisible = function(arg) {
    $scope.visible = arg;
  }
  
  $scope.returnVisible = function() {
    return $scope.visible;
  }
  
  
  
  // username i password
  $scope.loginData = {};
  
  $scope.resetData = function() {
    $scope.loginData = {};
    $scope.asistent = false;
    $scope.administrator = false;
    $scope.glavni_organizator = false;
  }
  
  $scope.login = function() {
    var loginDataJson = angular.toJson($scope.loginData);
    
    $http({
	method: 'post',
	url: 'test.php',
	data: loginDataJson,
	responseType: 'JSON',
	headers: {
	  'Content-Type': 'application/json; charset=UTF-8'
	}
      } 
    )
    .success(function(data, status, headers, config) {
      $scope.visible = false;
      $scope.logedIn = true;
      $scope.administrator = true; // test primer
      $scope.user = angular.fromJson(data);
      
      // TODO: mod za logovanje
      
      console.log("login: " + $scope.user);
    })
    .error(function(data, status, headers, config) {
      console.log("error: " + status);
    });
  } // login()
	 
  $scope.logout = function() {
    $scope.user = {};
    
    $scope.visible = false;
    $scope.logedIn = false;
    
    $scope.asistent = false;
    $scope.administrator = false;
    $scope.glavni_organizator = false;
  } // logout()

});

