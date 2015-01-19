// kontroleri za administratora

var administrator = angular.module('administratorModule', []);

administrator.controller('infoControler', function($scope, $http) {
  
  $scope.infoData = {};
  $scope.currentData = {};
  
  $http.get('json/info.json').success(function(data){
    $scope.currentData = angular.fromJson(data);
  });
  
  // TODO: sredi ispis kad se zatvori prozor sa porukom...
  // poruka o uspesnosti i promenljiva za njen prikaz
  $scope.msg = "";
  $scope.showMsg = false;
  
  $scope.success = function() {
    return $scope.showMsg;
  }
  $scope.successSet = function(arg) {
    $scope.showMsg = arg;
  }
  
  // TODO: sredi ispis kad se zatvori prozor sa porukom...
  // u slucaju greske
  $scope.err = false;
  
  $scope.error = function() {
    return $scope.err;
  }
  
  $scope.errorSet = function(arg) {
    $scope.err = arg;
  }
  
  $scope.submitData = function() {
    
    var infoDataJson = angular.toJson($scope.infoData);
    console.log(infoDataJson);
    
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
      if(data != null) {
	var tmp = "";
	if(data.hasOwnProperty('godina')) {
	  tmp = data.godina;
	  $scope.currentData.godina = data.godina;
	}
	else if(data.hasOwnProperty('emailss')) {
	  tmp = data.emailss;
	  $scope.currentData.emailss = data.emailss;
	}
	else if(data.hasOwnProperty('emailjag')) {
	  tmp = data.emailjag;
	  $scope.currentData.emailjag = data.emailjag;
	}
	$scope.msg = "Успешна промена! Нова вредност је: " + tmp;
	$scope.showMsg = true;
	
	$scope.resetData();
	 
      }
    })
    .error(function(data, status, headers, config){
      $scope.err = true;
      console.log("error: " + status);
    });
    
  }
  
  $scope.resetData = function() {
    $scope.infoData = {};
    console.log("resetData()");
  }
  
});


  
administrator.controller('newUserControler', function($scope, $http) {
  
  // katedre
  $http.get('json/katedre.json').success(function(data){
    $scope.katedre = angular.fromJson(data);
  });
  
  // poruka o uspesnosti i promenljiva za njen prikaz
  $scope.msg = "";
  $scope.showMsg = false;
  
  $scope.success = function() {
    return $scope.showMsg;
  }
  $scope.successSet = function(arg) {
    $scope.showMsg = arg;
  }
  
  // u slucaju greske
  $scope.err = false;
  
  $scope.error = function() {
    return $scope.err;
  }
 
  $scope.formData = {};   
  
  $scope.submitData = function() {

    var formDataJson = angular.toJson($scope.formData);
    
    $http({
      method: 'post',
      url: 'test.php', // TODO: stvarna adresa...
      data: formDataJson,
      responseType: 'JSON',
      headers: {
	  'Content-type': 'application/json; charset=utf-8'
	}
      }
    )
    .success(function (data, status, headers, config){
      if (data !== "null") {
	$scope.msg = "Успешно је унет нови корисник!";
	$scope.showMsg = true;
	
	console.log(data);
	console.log("success" + status);
      }
    })
    .error(function (data, status, headers, config){
      $scope.msg = "Дошло је до грешке приликом уноса новог корисника. Молимо вас покушајте поново.";
      $scope.err = true;
      console.log("error: " + status);
    });
  }
  
  $scope.resetData = function() {
    $scope.formData = {};
  }
});



administrator.controller('deleteUserControler', function($scope, $http) {
  
  $scope.korisnici = {};
  $http.get('json/korisnici.json').success(function(data) {
    $scope.korisnici = angular.fromJson(data);
  });
  
  // TODO: promeni da se ne salje imeprezime vec korisnicko ime, ono je identifikator u bazi!!!
  // TODO: da ti odmah ispise promenu statusa!!!
  // TODO: ispis poruka o uspesnosti i gresci
  $scope.promeniStatus = function(username) {
    var usernameJson = angular.toJson(username);
    
    $http({
      method: 'post',
      url: 'test.php',
      data: usernameJson,
      responseType: 'JSON',
      headers: {
	'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .success(function(data, status, headers, config) {
      console.log("success");
      console.log(data);
    })
    .error(function(data, status, headers, config) {
      console.log("error" + status);
    });
  }
  
});

administrator.controller('ucioniceControler', function($scope, $http) {

  $http.get('json/ucionice.json').success(function(data){
    $scope.ucionice = angular.fromJson(data);
  });
  
  $scope.prikaziPromeniFormu = false;
  $scope.returnForm = function() {
    return $scope.prikaziPromeniFormu;
  }
  $scope.setForm = function(arg) {
    $scope.prikaziPromeniFormu = arg;
  }
  
  // poruka o uspesnosti i promenljiva za njen prikaz
  $scope.msg = "";
  $scope.showMsg = false;
  
  $scope.success = function() {
    return $scope.showMsg;
  }
  $scope.successSet = function(arg) {
    $scope.showMsg = arg;
  }
  
  // u slucaju greske
  $scope.err = false;
  
  $scope.error = function() {
    return $scope.err;
  }
  
  $scope.ucionica = {};
  
  $scope.promeni = function(id, ime, kapacitet, racunari) {
    $scope.ucionica.id = id;
    $scope.ucionica.ime = ime;
    $scope.ucionica.kapacitet = kapacitet;
    $scope.ucionica.racunari = racunari;
   
    $scope.setForm(true);
    
    $scope.showMsg = false;
    $scope.err = false;
    
    console.log("promeni");
  }
  
  
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
      $scope.msg = "Успешно су промењени подаци за изабрану салу!";
      $scope.showMsg = true;
      $scope.ucionica = {};
    })
    .error(function(data, status, headers, config){
      console.log("error: " + status);
      $scope.ucionica = {};
      $scope.msg = "Дошло је до грешке приликом промене информација о сали. Молимо вас покушајте поново.";
      $scope.err = true;
    });
  }
  
  $scope.resetData = function() {
    $scope.ucionica = {};
  }
  
});



administrator.controller('resetControler', function($scope, $http) {
  
  // TODO; sredi ispis za ovoaj init(); da li ti treba?
  
  // $scope.asistenti = {};
  
  $scope.init = function() {
    $http.get('json/reset.json').success(function(data) {
      $scope.asistenti = angular.fromJson(data);
    });
  }
  
  // kad resetujemo cuvamo promene
  $scope.forSave= false;
  
  // da li smo resetovali podatke
  $scope.resetovano = false;
  
  // reset - kojim se vrednosti postavljaju na ocekivane u skladu sa uputstvom iz propozicija
  $scope.reset = function() {
    
    console.log("reset()");
    
    $http({
      method: 'post',
      url: 'test.php',
      data: $scope.asistenti,
      responseType: 'JSON',
      headers: {
	'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .success(function(data, status, headers, config) {
      // $scope.asistenti = angular.fromJson(data);
      
      // resetujemo podatke
      $scope.init();
      
      // omoguci cuvanje izmena
      $scope.forSave = true;
      
      // resetovali smo podatke
      $scope.resetovano = true;
    })
    .error(function(data, status, headers, config) {
      $scope.forSave = false;
    });
  }
  
  // sacuvaj izmene - kojim se vrednosti dobijene u prethodnom koraku mogu sacuvati u bazi podataka
  $scope.save = function() {
    // TODO: ...
    console.log("save()");
  }
  
});