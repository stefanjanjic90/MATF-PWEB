var app = angular.module('App', ['ngRoute', 'userControllers', 'userDirectives', 'Application']);

app.config(
  ['$routeProvider',
  
   function($routeProvider){
      $routeProvider.
	when('/', {
	  templateUrl: 'pages/public/raspored.html',
	  controller: 'rasporedControler'
	})
	.when('/p1', {
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


app.controller('indexControler', function($scope, $http, $location) {
 
  /*
  if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("localStorage is supported");
  } else {
    // Sorry! No Web Storage support..
    console.log("localStorage is'n supported");
  }
  */
  
  // TODO: tab u localStorage
  // tabovi...
  if(!localStorage.tab)
    localStorage.setItem('tab', 1);
  
  //$scope.tab = 1;
  $scope.setTab = function(t) {
    if(!isNaN(t) && t>0 /*&& t < 10*/)
      //$scope.tab = t;
      localStorage.setItem('tab', t);
    else
      localStorage.setItem('tab', 1);
      //$scope.tab = 1;
  }
  $scope.returnTab = function() {
    return parseInt(localStorage.getItem('tab'));//$scope.tab;
  }
  
  // podaci koje cuvamo o korisniku kad se uloguje
  var user = {
    username: '',
    administrator: false,
    koordinator: false,
    asistent: false,
    logedin: false
  };
  
  // cuvamo ih u localStorage-u
  if(!localStorage.user)
    localStorage.setItem('user', angular.toJson(user));
    
  // ng-show za log_out div
  $scope.loged = function() {
    user = angular.fromJson(localStorage.getItem('user'));
    return Boolean(user.logedin);
  }
  
  // funkcija vraca username ulogovanog korisnika
  $scope.whoAmI = function() {
    return user.username;
  }
 
 // vracamo mod za ulogovanog korisnika
  $scope.asist = function() {
    user = angular.fromJson(localStorage.getItem('user'));
    return user.asistent;   
  }
  $scope.admin = function() {
    user = angular.fromJson(localStorage.getItem('user'));
    return user.administrator;
  }
  $scope.koord = function() {
    user = angular.fromJson(localStorage.getItem('user'));
    return user.koordinator;
  }
  
  // za prikazivanje login forme
  $scope.visible = false;
  
  $scope.setVisible = function(arg) {
    $scope.visible = arg;
  }
  
  $scope.returnVisible = function() {
    return $scope.visible;
  }
  
  // username i password 
  // ono sto se salje za login
  $scope.loginData = {};
  
  // reset u login formi
  $scope.resetData = function() {
    $scope.loginData = {};
  }
  
  // login
  $scope.login = function() {
    var loginDataJson = angular.toJson($scope.loginData);
    
    $http({
	method: 'post',
	url: 'json/user.json', // TODO: stvarna adresa...
	data: loginDataJson,
	responseType: 'JSON',
	headers: {
	  'Content-Type': 'application/json; charset=UTF-8'
	}
      } 
    )
    .success(function(data, status, headers, config) {
      $scope.visible = false
      
      localStorage.setItem('user', angular.toJson(data));
      
      user = angular.fromJson(data);
    })
    .error(function(data, status, headers, config) {
      console.log("error: " + status);
    });
  } // login()
	 
  // logout - resetujemo podatke
  $scope.logout = function() {
    user = {
      username: '',
      administrator: false,
      koordinator: false,
      asistent: false,
      logedin: false
    };
    $scope.loginData = {};
    localStorage.setItem('user', angular.toJson(user));
    localStorage.setItem('tab', 1);
    
    //vracamo korisnika na pocetnu stranu (raspored)
    $location.path('/p1');
    
    $scope.visible = false;
  } // logout()

});