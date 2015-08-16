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
	
	    .factory('SrvDetailCommande', function($http) {
        var baseUrl = '';
		var det = [];
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/commande/all');
        return {
            get: function(comId) {
				return $http.get(baseUrl + '/api/commande/detail/' + comId);
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
	
	//Récupération de tous les clients
	
	   .factory('SrvClient', function($http) {
        var baseUrl = '';
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/client/all');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/client/all');
            },
            get: function(id) {
				return $http.get(baseUrl + '/api/client/all');
            }
        };
    })
	
	//Récupération des infos du client/all
	   
.factory('SrvCliDetail', function($http) {
        var baseUrl = '';
		var cli = [];
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/produit/all');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/client/all');
            },
            get: function(clieId) {
				return $http.get(baseUrl + '/api/client/' + clieId);
            }
        };
    })	
	
		//Récupération de tous les Rdv
	
	    .factory('SrvRdv', function($http) {
        var baseUrl = '';
		var rdv = [];
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/rdv/all');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/rdv/all');
            },
            get: function(rdvId) {
				return $http.get(baseUrl + '/api/rdv/' + rdvId);
            }
        };
    })
	
	
	//Récupération de tous les produits
	
	    .factory('SrvProduit', function($http) {
        var baseUrl = '';
		var pro = [];
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
    })
	
		.factory('SrvStatProduit', function($http) {
        var baseUrl = '';
		var statPro = [];
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/stat/detail');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/stat/detail');
            }
        };
    })
	
	.factory('SrvStatMensuel', function($http) {
        var baseUrl = '';
		var StatMensuel = [];
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/produit/all');
        return {
            all: function() {
                return $http.get(baseUrl + '/api/stat/mensuel');
            }
        };
    })
		
		.factory('SrvDetailPro', function($http) {
        var baseUrl = '';
        //var baseUrl = 'http://webstock/api/';
        //var cmdAll = $http.get(baseUrl + '/api/produit/');
        return {
            get: function(prodId) {
				return $http.get(baseUrl + '/api/produit/' + prodId);
            }
        };
    });
