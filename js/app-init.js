/**
 * Created by garden on 17-4-13.
 */
var app = angular.module("myApp",['ngRoute']);

    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/',{templateUrl:'../html/overview.html'})
            .when('/DHT网络热点图', {templateUrl:'../html/map.html'})
            .when('/实时资源分析', {templateUrl:'../html/realtime.html'})
            .when('/报表导出', {templateUrl:'../html/log.html'})
            .when('/屏蔽历史', {templateUrl:'../html/blockhistory.html'})
            .when('/资源屏蔽', {templateUrl:'../html/resourceblock.html'})
            .when('/结点屏蔽', {templateUrl:'../html/nodeblock.html'})
            .when('/直播举报',{templateUrl:'../html/livereport.html'})
            .when('/系统设置',{templateUrl:'../html/systemsetting.html'})
            .otherwise({redirectTo:'/'});
    }]);
app.service('ramdonlabelclasspicker', function() {
    this.pick = function () {
        var classsets = ["label label-danger","label label-info","label label-warning","label label-success"];
        var index = Math.floor(Math.random()*(classsets.length));
        return classsets[index];
    }
});

 var resourcemarklist= [];
 var nodemarklist = [];
//Angular command
app.directive("marksource",function () {
    return{
        restrict:"A",
        link: function ($scope,elem,attrs) {
            var index;
            $(elem).click(function () {
                index = $.inArray(attrs.tag,resourcemarklist);
                if(index != -1){
                    $(this).parent().parent().parent().parent().removeClass("resourcemark");
                    resourcemarklist.splice(index,1);
                }else{
                    $(this).parent().parent().parent().parent().addClass("resourcemark");
                    resourcemarklist.push(attrs.tag);
                }
            })
        }
    }
});
app.directive("marknode",function () {
    return{
        restrict:"A",
        link:function ($scope,elem,attrs) {
            var index;
            $(elem).click(function () {
               index = $.inArray(attrs.tag,nodemarklist);
               if(index != -1){
                   $(this).parent().parent().parent().parent().removeClass("nodemark");
                   nodemarklist.splice(index,1);
               }else{
                   $(this).parent().parent().parent().parent().addClass("nodemark");
                   nodemarklist.push(attrs.tag);
               }
            })
        }
    }
});
// Global array list
