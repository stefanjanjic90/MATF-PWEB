var app = angular.module('Application', ['ngRoute', 'userControllers', 'userDirectives']);

app.config(
  ['$routeProvider',
  
   function($routeProvider){
      $routeProvider.
	when('/p1', {
	  templateUrl: 'pages/pocetna.html',
	  controller: 'pocetnaControler'
	}).
	when('/p2', {
	  templateUrl: 'pages/raspored.html',
	  controller: 'rasporedControler'
	}).
	when('/p3', {templateUrl: 'pages/dezurstva.html'}).
	when('/p4', {
	  templateUrl: 'pages/info.html',
	  controller: 'infoControler'
	}).
	when('/p5', {
	  templateUrl: 'pages/newuser.html',
	  controller: 'newUserControler'
	}).
	when('/p6', {
	  templateUrl: 'pages/deleteuser.html',
	  controller: 'deleteUserControler'
	}).
	when('/p7', {templateUrl: 'pages/reset.html'}).
	when('/p8', {
	  templateUrl: 'pages/ucionice.html',
	  controller: 'ucioniceControler'
	}).
	otherwise({redirectTo: '/'});
   }
  ]
);


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





