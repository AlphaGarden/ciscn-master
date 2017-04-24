/**
 * Created by garden on 17-4-13.
 */
var app = angular.module("myApp",['ngRoute']);

    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/',{templateUrl:'/ciscn-master/html/overview.html'})
            .when('/实时资源分析', {templateUrl:'/ciscn-master/html/realtime.html'})
            .when('/报表导出', {templateUrl:'/ciscn-master/html/log.html'})
            .when('/屏蔽历史', {templateUrl:'/ciscn-master/html/blockhistory.html'})
            .when('/资源屏蔽', {templateUrl:'/ciscn-master/html/resourceblock.html'})
            .when('/结点屏蔽', {templateUrl:'/ciscn-master/html/nodeblock.html'})
            .otherwise({redirectTo:'/'});
    }]);