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
  
  // godine za koje postoje rasporedi aktivnosti
  $scope.godine = [2015, 2014];
  // TODO: ajax poziv
//   $http.get("aktivnegodine.php").success(function(data) {
//     $scope.godine = angular.fromJson(data);
//   });
  
  
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
  
  // TODO: da li samo iz trenutne godine, ili iz trenutnog roka?
  // moze da se otkaze obaveza samo iz trenutne godine
  $scope.aktivnaGodina = function() {
    return $scope.izabranaGodina == (new Date()).getFullYear();
  }
  
  
  $scope.otkaziObavezu = function(id) {
    
    var obaveza = angular.toJson(id);
    
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
      // console.log(data);
      $scope.msg = "Успешно отказана обавеза!";
      $scope.successSet(true);
    })
    .error(function(data, status, headers, config) {
      // console.log("error");
      $scope.msg = "Дошло је до грешке приликом отказивања обавезе. Молимо вас покушајте поново.";
      $scope.errorSet(true);
    });

    if($scope.success()) {
      // trazimo ponovo spisak obaveza
      $http.get('json/raspored.json').success(function(data){
	$scope.raspored = angular.fromJson(data);
      });
    }
    
  } // otkaziObavezu()
    
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
publicpages.controller('HoursOnCallController', function($scope, $http, $filter){

	$scope.asTable = []; // tabela svih obaveza asistenta u tekucoj godini koje se nalaze u bazi [datum, vreme, opis_obaveze]
	$scope.asTableVisible = false; // vidljivost tabele 
	$scope.totalHoursOfDuty = []; //totalHoursOfDuty [ime asistenta, broj sati dezurstva]
	$scope.msg = "";
	
	  	$http.get('sati_dezuranja.php', {responseType: 'JSON'}).success(function(data){
    		$scope.totalHoursOfDuty = angular.fromJson(data);    		
	}).error(function(data, status, headers, config){
							$scope.msg=status+": an error occured";	});

 $scope.totalHoursOfDuty = [{assistant: 'Neko Neko',username: '...', hours:10},{assistant: 'Neko Neko',username: '...', hours:11},{assistant: 'Neko Neko ',username: '...', hours:2}];


$scope.showAsTable = function(index)
{
	$scope.asTableVisible = true; // tabela svih dezurstava asistenta iz baze (ako moze da se dobije sortirana hronoloski-po datumu)
	$scope.tableName = $scope.totalHoursOfDuty[index].assistant
	$http.get('sveObavezeAsistenta.php?user='+$scope.totalHoursOfDuty[index].username, {responseType: 'JSON'}).success(function(data){
		$scope.asTable = angular.fromJson(data);
   		}).error(function(data, status, headers, config){
					$scope.msg=status+": an error occured";	});
					
	$scope.asTable = [{date: '2014-01-29', time:'2h', typeOfDuty: 'kolokvijum iz Programiranja1'},
										{date: '2014-10-29', time:'2h', typeOfDuty: 'kolokvijum iz Programiranja1'},
										{date: '2014-11-29', time:'2h', typeOfDuty: 'kolokvijum iz Programiranja1'},
										{date: '2016-05-29', time:'2h', typeOfDuty: 'kolokvijum iz Programiranja1'}];
}

$scope.setVisible = function(value)
{
	$scope.asTableVisible = value;
}

$scope.returnDutyTime = function(index)
{
	var newDate = new Date($scope.asTable[index].date).getTime();  
	var curDate = new Date().getTime();
	
	if(newDate >= curDate)
		return 'new';
	else 
		return 'old';
}

});