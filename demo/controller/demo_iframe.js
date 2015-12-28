'use strict';

 angular.module('myApp.demo_iframe', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_iframe', {
    templateUrl: 'template/demo_iframe.html',
    controller: 'demoIframeCtrl'
  });
}])
 
.controller('demoIframeCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Iframe');

}]);
