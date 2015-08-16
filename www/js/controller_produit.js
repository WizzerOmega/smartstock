angular.module('smartstock.controller_produit', [])

.controller('TProduitCtrl', function($scope, $http, SrvTypeProduit, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
	
	var baseUrl = '';
	var i = 0;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/tproduit/all').then(function(resp) {

    })*/

    SrvTypeProduit.all().success(function(data) {
		
        $scope.tproduits = data;
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

//Controler des produits

.controller('ProduitCtrl', function($scope, $http, SrvProduit, $stateParams) {
    var baseUrl = '';
	var i = 0;
	$stateParams.playlistId;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/produit/all').then(function(resp) {

    })*/
    SrvProduit.get($stateParams.playlistId).success(function(data) {	
        $scope.produits = data;
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

//Controller du detail du produit
	
.controller('ProduitDetailCtrl', function($scope, $http, SrvDetailPro, SrvProduit, $stateParams) {
    var baseUrl = '';
	var i = 0;
	$stateParams.prodId;
    //var baseUrl = 'http://webstock/api/';
    /*$http.get(baseUrl + '/api/produit/all').then(function(resp) {

    })*/
    SrvDetailPro.get($stateParams.prodId).success(function(data) {	
        $scope.prod = data;
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