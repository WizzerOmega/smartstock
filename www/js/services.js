angular.module('smartstock.services', [])
    .factory('SrvCommande', function($http) {
        var baseUrl = '';
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/commande/all');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/commande/all');
            },
            get: function(id) {

            }
        };
    });
