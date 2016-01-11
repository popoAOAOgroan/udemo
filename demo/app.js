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
  'myApp.demo_multistep',
  'myApp.demo_iframe',
  'myApp.demo_djlist',
  'myApp.demo_steps',
  'myApp.demo_ebook',
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
  $scope.animationcClass = 'rightin';
  $scope.$on("MainCtrDisplayBtnChange", function (event, isdisplay) {
    $scope.displayBackBtnVar = isdisplay;
    $scope.displaySearchBtnVar = !isdisplay;
  });
  $scope.UDemo = 'UDemo';
  $scope.$on("MainCtrNameChange", function (event, name) {
    // console.log("parent", name);
    // $scope.animationcClass = 'rightin';
    $scope.UDemo = name;
    if (name == 'Demo') {
      $scope.fontEffect = 'font-effect-3d';
    }else{
      $scope.fontEffect = '';
      $scope.animationcClass = 'rightin';
    };
  });
  
  //hide header
  $scope.isHideHeader = false;
  $scope.$on("HideHeader", function (event, bool) {
    $scope.isHideHeader = bool;
  });

  $scope.EmailQuery = function() {
    if($scope.query){
      console.log("search" + $scope.query);
      $scope.$broadcast("SearchQuery", $scope.query);
    }
  }

}])
