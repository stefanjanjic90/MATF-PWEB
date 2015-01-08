var app = angular.module('Application', ['ngRoute', 'userControllers']);

app.config(
  ['$routeProvider',
  
   function($routeProvider){
      $routeProvider.
	when('/p1', {
	  templateUrl: 'pages/pocetna.html',
	  controller: 'pocetnaControler'
	}).
	when('/p2', {templateUrl: 'pages/dezurstva.html'}).
	when('/p3', {
	  templateUrl: 'pages/info.html',
	  controller: 'infoControler'
	}).
	when('/p4', {
	  templateUrl: 'pages/newuser.html',
	  controller: 'newUserControler'
	}).
	when('/p5', {templateUrl: 'pages/reset.html'}).
	when('/p6', {
	  templateUrl: 'pages/ucionice.html',
	  controller: 'ucioniceControler'
	}).
	otherwise({redirectTo: 'pages/pocetna.html'});
   }
  ]
);