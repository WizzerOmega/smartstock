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
    })
	
    .factory('SrvTypeProduit', function($http) {
        var baseUrl = '';
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/tproduit/all');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/tproduit/all');
            },
            get: function(id) {
				return $http.get(baseUrl + '/api/tproduit/all');
            }
        };
    })
	
	    .factory('SrvProduit', function($http) {
        var baseUrl = '';
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/produit/all');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/produit/all');
            },
            get: function(playlistId) {
				return $http.get(baseUrl + '/api/produit/all/categ/' + playlistId);
            }
        };
    });
