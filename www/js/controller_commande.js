angular.module('smartstock.controller_commande', [])

//Controller des commandes

.controller('CommandeCtrl', function($scope, $http, SrvCommande) {
    var baseUrl = '';
	var i = 0;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/commande/all').then(function(resp) {

    })*/

    SrvCommande.all().success(function(data) {
		
        $scope.commandes = data;
    });

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
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

.controller('CommandeDetailCtrl', function($scope, $http, SrvDetailCommande, $stateParams) {
    var baseUrl = '';
	var i = 0;
	$stateParams.comId;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/produit/all').then(function(resp) {

    })*/
    SrvDetailCommande.get($stateParams.comId).success(function(data) {	
        $scope.coms = data;
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