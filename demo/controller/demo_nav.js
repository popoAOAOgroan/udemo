'use strict';

 angular.module('myApp.demo_nav', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_nav', {
    templateUrl: 'template/demo_nav.html',
    controller: 'demoNavCtrl'
  });
}])
 
.controller('demoNavCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Nav');

	var def = 4;
	$('.con-demonav .add').click(function(){
		// $('.con-demonav footer').removeClass('box'+def);
		// def<8?def++:def=1;
		def++;
		// $('.con-demonav footer').addClass('box'+def);
		$('.con-demonav footer').append("<div class='new"+def+"'>new"+def+"</div>");
	})
	$('.con-demonav .minus').click(function(){
		// $('.con-demonav footer').removeClass('box'+def);
		$(".new"+def).remove();
		def>1?def--:def=1;
		// $('.con-demonav footer').addClass('box'+def);
		
	})
	$('footer div').click(function(){
		$('footer div').removeClass('active');
		$(this).addClass('active');
	})
}]);
