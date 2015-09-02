angular.module('smartstock.controller_session', [])
/*.controller('SessionsCtrl', function($scope, SrvSession) {
   $scope.session = Session.get({emailCom: $stateParams.emailCom}{mdpCom: $stateParams.mdpCom});
})*/

.controller('LoginCtrl', function($scope, $http, LoginService, $ionicPopup, $stateParams, $state) {
    $scope.data = {};
    $scope.login = function() {
        LoginService.loginUser($scope.data.email, $scope.data.password).success(function(data) {         
			$scope.representant = data;	
console.log($scope.representant);			
			$state.go('app.profil');
        }).error(function(data) {
			console.log(data);
            var alertPopup = $ionicPopup.alert({
                title: 'Erreur de connexion',
                template: 'Vérifiez vos informations de connexion'
            });
        });
	}
});