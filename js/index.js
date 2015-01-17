var app = angular.module('App', ['ngRoute', 'userControllers', 'userDirectives', 'Application']);

app.config(
  ['$routeProvider',
  
   function($routeProvider){
      $routeProvider.
	when('/p1', {
	  templateUrl: 'pages/public/raspored.html',
	  controller: 'rasporedControler'
	})
	.when('/p2', {
	  templateUrl: 'pages/public/zauzetost.html',
	  controller: 'HoursOnCallController'
	})
	.when('/p3', {templateUrl: 'pages/asistent/dezurstva.html'})
	.when('/p4', {
	  templateUrl: 'pages/administrator/info.html',
	  controller: 'infoControler'
	})
	.when('/p5', {
	  templateUrl: 'pages/administrator/newuser.html',
	  controller: 'newUserControler'
	})
	.when('/p6', {
	  templateUrl: 'pages/administrator/deleteuser.html',
	  controller: 'deleteUserControler'
	})
	.when('/p7', {templateUrl: 'pages/administrator/reset.html'})
	.when('/p8', {
	  templateUrl: 'pages/administrator/ucionice.html',
	  controller: 'ucioniceControler'
	})
	.otherwise({redirectTo: '/'});
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
  $scope.koordinator = false;
  
  // vracamo mod za svakog
  $scope.asist = function() {
    return $scope.asistent;
  }
  $scope.admin = function() {
    return $scope.administrator;
  }
  $scope.koord = function() {
    return $scope.koordinator;
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
    $scope.koordinator = false;
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
      $scope.koordinator = true; // test primer
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
    $scope.koordinator = false;
  } // logout()

});





