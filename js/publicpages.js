// kontroleri za javne stranice

var publicpages = angular.module('publicPagesModule', []);


publicpages.controller('rasporedControler', function($scope, $http) {
  
  $scope.raspored = {};
  
  // citamo raspored iz .json fajla
  $http.get('json/raspored.json').success(function(data){
    $scope.raspored = angular.fromJson(data);
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
  
  $scope.errorSet = function(arg) {
    $scope.err = arg;
  }
  
  // prikaz podataka po danima u nedelji
  $scope.dani = [
    "Недеља",
    "Понедељак",
    "Уторак",
    "Среда",
    "Четвртак",
    "Петак",
    "Субота"
  ];
  
  // trenutni datum
  var datum = new Date();
  
  $scope.trenutniDan = function() {
    return datum.getDay();
  }
  // console.log("dan: " + $scope.dani[datum.getDay()]);  
  
  // indeks dana u nedelji po nizu dani
  // npr 0 - nedelja, 1 - ponedeljak,...
  $scope.dan = datum.getDay();
  $scope.odabraniDan = function(d) {
    $scope.dan = d;
  }
  
  // za filtriranje prikaza po godini
  $scope.izabranaGodina = (new Date()).getFullYear();
  
  
  $scope.otkaziObavezu = function(id) {
    
    var obaveza = angular.toJson(id);
    
    // TODO: trazi obaveze ponovo radi ispisa bez obrisane obaveze...
    
    $http({
      method: 'post',
      url: 'test.php',
      data: obaveza,
      responseType: 'JSON',
      headers: {
	'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .success(function(data, status, headers, config) {
      console.log(data);
      $scope.msg = "Успешно отказана обавеза!";
      $scope.successSet(true);
    })
    .error(function(data, status, headers, config) {
      console.log("error");
      $scope.msg = "Дошло је до грешке приликом отказивања обавезе. Молимо вас покушајте поново.";
      $scope.errorSet(true);
    });

  }
    
});

// filtre za sortiranje i ispis rasporeda po danima u nedelji
publicpages.filter('danNedelja', function() {
  
  return function(raspored, scope) {
    var rezultat = [];
    
    var danas = Date.now();
    for(var i = 0; i < raspored.length; i++) {
      var tmp = raspored[i].datum;
      // console.log((new Date(tmp)).getDay());
      if(((new Date(tmp)).getDay() === scope.dan) && ((new Date(tmp)).getFullYear() == scope.izabranaGodina)) {
	rezultat.push(raspored[i]);
	// console.log(raspored[i].datum);
      }
    }
  
    return rezultat;
  }
  
});

// TODO: dodaj kontroler za zauzetost asistenata