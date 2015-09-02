// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('smartstock', ['ionic', 'ionic-material', 'ionMdInput', 'smartstock.controller_chart', 'smartstock.controllers', 'smartstock.controller_commande',  'smartstock.controller_rdv', 'smartstock.authentification', 'smartstock.controller_produit', 'smartstock.controller_client', 'smartstock.controller_map', 'smartstock.services', 'ngCordova', 'smartstock.controller_geolocation', "chart.js",  'ngResource' ,'smartstock.controller_session'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
		controller : 'ClientCtrl'
      }
    }
  })
  
    .state('app.clidetail', {
    url: '/search/:clieId',
    views: {
      'menuContent': {
        templateUrl: 'templates/clidetail.html',
		controller : 'ClientDetailCtrl'
      }
    }
  })
  
   .state('app.geolocalisation', {
    url: '/geolocalisation',
    views: {
      'menuContent': {
        templateUrl: 'templates/geolocalisation.html',
		controller : 'MapCtrl'
      }
    }
  })
  
  .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }
        }
    })
	
	    .state('app.profil', {
		cache: false,
        url: '/profil',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil.html'
            }
        }
    })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
		  controller : 'CommandeCtrl'
        }
      }
    })
	
	  .state('app.comdetail', {
      url: '/browse/:comId',
      views: {
        'menuContent': {
          templateUrl: 'templates/comdetail.html',
		  controller : 'CommandeDetailCtrl'
        }
      }
    })
	
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'TProduitCtrl'
        }
      }
    })
	
  .state('app.stats', {
	  cache: false,
      url: '/stats',
      views: {
        'menuContent': {
          templateUrl: 'templates/stats.html',
		  controller: 'GraphCtrl'
        }
      }
    })
	
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'ProduitCtrl'
      }
    }
  })
  
  	  .state('app.prod', {
      url: '/single/:prodId',
      views: {
        'menuContent': {
          templateUrl: 'templates/prod.html',
		  controller : 'ProduitDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
