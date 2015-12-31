'use strict';

 angular.module('myApp.demo_djlist', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_djlist', {
    templateUrl: 'template/demo_djlist.html',
    controller: 'demoDjlistCtrl'
  });
}])
 
.controller('demoDjlistCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Multiple-list');
	$(function() {
		var wrapper = document.getElementById('wrapper');
		var myScroll = new IScroll(wrapper, {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: true,
			//提高性能
			bounce: false,
		    disableMouse: true,
		    disablePointer: true,
			momentum: false,
			scrollbars: false,
			shrinkScrollbars: 'clip',
			preventDefault: false

		});
	});
	
}]);
