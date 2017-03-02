/**
 * Created by Jesus Soto on 3/1/2017.
 */
(function(){
   'use strict';

    var app = angular.module('fisherApp', []).run(
                              function($rootScope){});

    angular.module('fisherApp').config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', waitForServices({
              url:'/',
              templateUrl:'app/views/home/index.html'
            }))
    }

    function waitForServices(conf) {
        if (!conf.resolve) {
            conf.resolve = {};
        }

        conf.resolve.waitForServicesInitialization = ['$q', 'appService', function ($q, appService) {

            var def = $q.defer();
            appService._addInitListener(function () {
                def.resolve();
            });

            return def.promise;
        }];

        return conf;
    }

});
