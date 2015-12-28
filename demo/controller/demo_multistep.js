'use strict';

 angular.module('myApp.demo_multistep', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_multistep', {
    templateUrl: 'template/demo_multistep.html',
    controller: 'demoMultistepCtrl'
  });
}])
 
.controller('demoMultistepCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Multi-Step');

}]);
