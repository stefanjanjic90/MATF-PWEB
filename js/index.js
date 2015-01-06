var app = angular.module('Application', ['ngRoute']);

app.config(
  ['$routeProvider',
  
   function($routeProvider){
      $routeProvider.
	when('/p1', {templateUrl: 'pages/dezurstva.html'}).
	when('/p2', {templateUrl: 'pages/info.html'}).
	when('/p3', {
	  templateUrl: 'pages/newuser.html',
	  controller: 'newUserControler'
	}).
	when('/p4', {templateUrl: 'pages/reset.html'}).
	when('/p5', {
	  templateUrl: 'pages/ucionice.html',
	  controller: 'ucioniceControler'
	}).
	otherwise({redirectTo: 'pages/pocetna.html'});
   }
  ]
);


app.controller('newUserControler', function($scope, $http) {
  
  // TODO: katedre u .json pa posle ovde ucitaj...
  $scope.katedre = [
    {ime: 'Катедра за алгебру и математичку логику'},
    {ime: 'Катедра за астрономију'},
    {ime: 'Катедра за вероватноћу и статистику'},
    {ime: 'Катедра за геометрију'},
    {ime: 'Катедра за диференцијалне једначине'},
    {ime: 'Катедра за рачунарство и информатику'},
    {ime: 'Катедра за комплексну анализу'},
    {ime: 'Катедра за механику'},
    {ime: 'Катедра за нумеричку математику и оптимизацију'},
    {ime: 'Катедра за математичку анализу'},
    {ime: 'Катедра за реалну и функционалну анализу'},
    {ime: 'Катедра за методику наставе'},
    {ime: 'Катедра за топологију'}  
  ];

  
  
  $scope.predind = false;

  $scope.setVisible = function(param) {
    $scope.predind = param;
  }
  
  $scope.returnVisible = function() {
    return $scope.predind;
  }
  
  
  
  // TODO: submit...

  $scope.formData = {};   
  
  $scope.submitData = function() {

    $scope.formDataJson = angular.toJson($scope.formData);
    
    $http({
      method: 'post',
      url: 'test.php', // TODO: stvarna adresa...
      data: $scope.formDataJson,
      responseType: 'JSON',
      headers: {
	  'Content-type': 'application/json; charset=utf-8' // TODO: proveri i sredi kodiranje...
	}
      }
    )
    .success(function (data, status, headers, config){
      // if (data !== "null") ...
      console.log(data);
      console.log("success" + status);
    })
    .error(function (data, status, headers, config){
      console.log("error: " + status);
    });
  }
});

app.controller('ucioniceControler', function($scope, $http){
  
  // ucioniceControler...
  // ime kapacitet racunari
  
  // TODO: .json fajl koji ima spisak ucionica u bazi...
  $scope.ucionice = [
    {
      i: 1,
      ime: 'Учионица 1',
      kapacitet: 10,
      racunari: 3
    },    
    {
      i: 2,
      ime: 'Учионица 2',
      kapacitet: 19,
      racunari: 8
    },
    {
      i: 3,
      ime: 'Учионица 3',
      kapacitet: 18,
      racunari: 7
    },
    {
      i: 4,
      ime: 'Учионица 4',
      kapacitet: 10,
      racunari: 10
    },
    {
      i: 5,
      ime: 'Учионица 5',
      kapacitet: 17,
      racunari: 9
    },
    {
      i: 6,
      ime: 'Учионица 6',
      kapacitet: 12,
      racunari: 6
    },
    {
      i: 7,
      ime: 'Учионица 7',
      kapacitet: 16,
      racunari: 11
    }
  ];
  
  $scope.ucionica = {};
  
  $scope.changeData = function() {
   
    var dataToChange = angular.toJson($scope.ucionica);
    
    $http({
      method: 'post',
      url: 'test.php',
      data: dataToChange,
      responseType: 'JSON',
      headers: {
	  'Content-Type': 'application/json; charset=UTF-8'
	}
    })
    .success(function(data, status, headers, config){
      console.log("success: " + status);
      console.log(data);
    })
    .error(function(data, status, headers, config){
      console.log("error: " + status);
    });
  }
  
});
