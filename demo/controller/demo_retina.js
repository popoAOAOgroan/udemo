'use strict';

 angular.module('myApp.demo_retina', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_retina', {
    templateUrl: 'template/demo_retina.html',
    controller: 'demoRetinaCtrl'
  });
}])
 
.controller('demoRetinaCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Retina');

}]);
