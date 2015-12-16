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

	$('.con-list li').click(function(){
		$('.back').css('display','block');
	})
	$('.back').click(function(){
		$('.back').css('display','none');
	})
}]);

