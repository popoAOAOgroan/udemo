
'use strict';

 angular.module('myApp.demo_steps', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_steps', {
    templateUrl: 'template/demo_steps.html',
    controller: 'demoStepsCtrl'
  });
}])
 
.controller('demoStepsCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Animation Steps');

	$('.con-demosteps i').click(function(){
		if (!$(this).hasClass('play')) {
			$(this).addClass('play');
			var playtimeOut = setTimeout(function(){
				$('.con-demosteps i').removeClass('play');
				clearTimeout(playtimeOut);
			},1000);
		};
	})
}]);
