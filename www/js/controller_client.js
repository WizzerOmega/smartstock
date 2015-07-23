angular.module('smartstock.controller_client', [])

.controller('ClientCtrl', function($scope, $http, SrvClient) {
    var baseUrl = '';
	var i = 0;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/client/all').then(function(resp) {

    })*/
    SrvClient.all().success(function(data) {	
        $scope.clients = data;
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
})

.controller('ClientDetailCtrl', function($scope, $http, SrvCliDetail, $stateParams) {
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