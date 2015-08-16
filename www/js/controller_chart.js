angular.module('smartstock.controller_chart', [])

.controller('GraphCtrl', function($scope) { // Add a simple controller
  $scope.graph = {};                        // Empty graph object to hold the details for this graph
  $scope.graph.data = [                     // Add bar data, this will set your bars height in the graph
    //2015
    [16, 15, 20, 12, 16, 12, 8, 10],
  ];
  $scope.graph.labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août'];    // Add labels for the X-axis
  $scope.graph.series = ['2015'];  // Add information for the hover/touch effect

})

.controller("PieCtrl", function ($scope,$http, SrvStatProduit, $stateParams) {
	$scope.labels = [];
	$scope.data = [];
    SrvStatProduit.all().success(function(r) {
      $scope.labels.push(r.LIB_PROD)
      $scope.data.push(r.QTE)
    })
 
})

.controller("StatCtrl", function ($scope, $http, SrvStatProduit, $stateParams){
	var baseUrl = '';
	var i = 0;
	  
	  SrvStatProduit.all().success(function(data) {	
		$scope.statPros = data;
	});
});
