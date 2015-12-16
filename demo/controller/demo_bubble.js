'use strict';

 angular.module('myApp.demo_bubble', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_bubble', {
    templateUrl: 'template/demo_bubble.html',
    controller: 'demoBubbleCtrl'
  });
}])
 
.controller('demoBubbleCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Bubble');
}]);
