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
	when('/p6', {templateUrl: 'pages/reset.html'}).
	when('/p7', {
	  templateUrl: 'pages/ucionice.html',
	  controller: 'ucioniceControler'
	}).
	otherwise({redirectTo: '/'});
   }
  ]
);





