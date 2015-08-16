angular.module('smartstock.controller_client', [])

.controller('ClientCtrl', function($scope, $http, SrvClient, ionicMaterialInk, ionicMaterialMotion) {
    var baseUrl = '';
	var i = 0;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/client/all').then(function(resp) {

    })*/
    SrvClient.all().success(function(data) {	
        $scope.clients = data;
	});
	// Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();})

.controller('ClientDetailCtrl', function($scope, $http, SrvCliDetail, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
        // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
	
	var baseUrl = '';
	var i = 0;
	$stateParams.clieId;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/client/all').then(function(resp) {

    })*/
    SrvCliDetail.get($stateParams.clieId).success(function(data) {	
        $scope.clis = data;
	});
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});