'use strict';

 angular.module('myApp.search', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'template/search.html',
    controller: 'searchCtrl'
  });
}])
 
.controller('searchCtrl',['$scope','$http',function($scope, $http) {
	// $scope.$emit("MainCtrNameChange", 'Search');

	$http.get('../demo/json/records.json').success(function(data){
		$scope.list = data.records;
	});

	$scope.query = "sobudaosobudao";

	$scope.$on("SearchQuery", function (event, query) {
    	console.log("yi??" + query);
	    $scope.query = query;
	});
	
}]);
