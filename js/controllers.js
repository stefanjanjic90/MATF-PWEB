var controllers = angular.module('userControllers', []);

controllers.controller('pocetnaControler', function($scope, $http) {
  
  // pocetna.html controller
  
});



controllers.controller('infoControler', function($scope, $http) {
  
  $scope.infoData = {};
  
  $scope.submitData = function() {
    
    var infoDataJson = angular.toJson($scope.infoData);
    
    $http({
	method: 'post',
	url: 'test.php', // TODO: stvarna adresa...
	data: infoDataJson,
	responseType: 'JSON',
	headers: {
	  'Content-type': 'application/json; charset=utf-8'
	}
      }
    )
    .success(function(data, status, headers, config){
      console.log("data: " + data);
      console.log(status);
    })
    .error(function(data, status, headers, config){
      console.log("error: " + status);
    });
    
  }
  
  $scope.resetData = function() {
    $scope.infoData = {};
    console.log("resetData()");
  }
  
});


  
controllers.controller('newUserControler', function($scope, $http) {
  
  // katedre
  $http.get('json/katedre.json').success(function(data){
    $scope.katedre = angular.fromJson(data);
    // console.log($scope.katedre);
  });
  
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

    var formDataJson = angular.toJson($scope.formData);
    
    $http({
      method: 'post',
      url: 'test.php', // TODO: stvarna adresa...
      data: formDataJson,
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
  
  $scope.resetData = function() {
    $scope.formData = {};
  }
});


controllers.controller('ucioniceControler', function($scope, $http){

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
  
  $scope.submitData = function() {
   
    var dataToSubmit = angular.toJson($scope.ucionica);
    
    $http({
      method: 'post',
      url: 'test.php',
      data: dataToSubmit,
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
  
  /*
  $scope.resetData = function() {
    $scope.ucionica = {};
  }
  */
});