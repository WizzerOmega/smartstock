angular.module('smartstock.controller_chart', [])

.controller('GraphCtrl', function($scope,$http, SrvStatMensuel, $stateParams) { // Add a simple controller


  	SrvStatMensuel.all().success(function(data) {	
		$scope.statMen = data;
		$scope.graph = {};
		var myArray = [];
		var myLib = [];
			for (var i = 0, len = $scope.statMen.length; i < len; i++) {
				console.log(i);
				myArray.push($scope.statMen[i].QTE);
				myLib.push([$scope.statMen[i].MOIS]);
			}
			$scope.graph.data = [myArray];			
			$scope.graph.labels = myLib;
			$scope.graph.series = ['2015'];  // Add information for the hover/touch effect
	});
})

.controller("PieCtrl", function ($scope,$http, SrvStatProduit, $stateParams) {
	SrvStatProduit.all().success(function(data) {	
		$scope.statPro = data;
		var myArray = [];
		var myLib = [];
			for (var i = 1, len = $scope.statPro.length; i < len; i++) {
				console.log(i);
				myArray.push($scope.statPro[i].QTE);
				myLib.push([$scope.statPro[i].LIB_PROD]);
			}
			$scope.data = myArray;
			$scope.labels = myLib;
	});
});
