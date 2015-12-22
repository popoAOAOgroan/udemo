'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  // 'angular-loading-bar',
  'ngAnimate',
  'ngProgress',
  'baiduMap',
  'myApp.list',
  'myApp.search',
  'myApp.demo_nav',
  'myApp.demo_map',
  'myApp.demo_header',
  'myApp.demo_bubble',
  'myApp.demo_pie',
  'myApp.demo_retina',

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
  //loading
  $scope.progressbar = ngProgressFactory.createInstance();
  $scope.progressbar.start();
  //主界面
  $scope.displayBackBtnVar = true;
  $scope.displaySearchBtnVar = false;
  $scope.displayInputVar = true;
  $scope.$on("MainCtrDisplayBtnChange", function (event, isdisplay) {
    $scope.displayBackBtnVar = isdisplay;
    $scope.displaySearchBtnVar = !isdisplay;
  });
  $scope.UDemo = 'UDemo';
  $scope.$on("MainCtrNameChange", function (event, name) {
    // console.log("parent", name);
    $scope.UDemo = name;
  });
  
  $scope.EmailQuery = function() {
    if($scope.query){
      console.log("jinqu??" + $scope.query);
      $scope.$broadcast("SearchQuery", $scope.query);
    }
  }

}]);
