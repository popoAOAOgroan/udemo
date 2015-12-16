'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  // 'angular-loading-bar',
  'ngAnimate',
  'ngProgress',
  'baiduMap',
  'myApp.list',
  'myApp.demo_nav',
  'myApp.demo_map',
  'myApp.demo_header',
  'myApp.demo_bubble',
  'myApp.demo_pie',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}])
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('', {
//     controller: 'MainCtrl'
//   });
// }])

.controller('MainCtrl',['$scope','ngProgressFactory', function($scope,ngProgressFactory) {
  $scope.progressbar = ngProgressFactory.createInstance();
  $scope.progressbar.start();

  $scope.UDemo = 'UDemo';
  $scope.$on("MainCtrNameChange", function (event, name) {
    // console.log("parent", name);
    $scope.UDemo = name;
  });
}]);
