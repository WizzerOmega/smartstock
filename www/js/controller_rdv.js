angular.module('smartstock.controller_rdv', [])

.controller('RdvCtrl', function($scope, $http, SrvRdv, ionicMaterialInk, ionicMaterialMotion) {
    var baseUrl = '';
	var i = 0;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/rdv/all').then(function(resp) {

    })*/
    SrvRdv.all().success(function(data) {	
        $scope.rdvs = data;
		$scope.limite = "2015-08-13 01:00:00";
	}
	);
	// Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();});