'use strict';

 angular.module('myApp.list', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'template/list.html',
    controller: 'listCtrl'
  });
}])
 
.controller('listCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.$emit("MainCtrNameChange", 'Demo');

　	$http.get('../demo/json/records.json').success(function(data){
		$scope.list = data.records;
	});

	$scope.displayBtn = function(){
		$scope.$emit("MainCtrDisplayBtnChange", false);
	};
}]);
