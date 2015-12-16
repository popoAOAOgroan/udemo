'use strict';

 angular.module('myApp.demo_header', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_header', {
    templateUrl: 'template/demo_header.html',
    controller: 'demoHeaderCtrl'
  });
}])
 
.controller('demoHeaderCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Header');
}]);
