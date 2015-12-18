'use strict';

 angular.module('myApp.list', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'template/list.html',
    controller: 'listCtrl'
  });
}])
 
.controller('listCtrl',['$scope',function($scope) {
	$scope.$emit("MainCtrNameChange", 'Demo');


	$scope.list = [
		{name: 'Nav', url: '#/demo_nav'},
		{name: 'Map', url: '#/demo_map'},
		{name: 'Header', url: '#/demo_header'},
		{name: 'Bubble', url: '#/demo_bubble'},
		{name: 'Pie & Finger', url: '#/demo_pie'},
		{name: 'Retina', url: '#/demo_retina'},
	];

	$scope.displayBtn = function(){
		$scope.$emit("MainCtrDisplayBtnChange", false);
	};
}]);
