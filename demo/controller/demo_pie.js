'use strict';

 angular.module('myApp.demo_pie', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_pie', {
    templateUrl: 'template/demo_pie.html',
    controller: 'demoPieCtrl'
  });
}])
 
.controller('demoPieCtrl',['$scope', function($scope) {
	$scope.$emit("MainCtrNameChange", 'Pie & Finger');

	var count = 0;
	// var content = document.getElementById('zz');
	// content.addEventListener('touchstart', function(e) {
	//     var touch = e.touches[0];
	// 	console.log(count);
	// }, false);
	document.addEventListener('touchstart', function(e) {
	    // e.preventDefault();
	    var touch = e.touches[0];
	 //    var para=document.createElement("div");
		// var container=document.getElementById("finger-container");
		// container.appendChild(para);
		// para.className = 'touch-finger touch-finger-animation'; 
		// para.style.top = touch.pageY-11 + "px";
		// para.style.left = touch.pageX-11 + "px";
		$('.text').html(touch.pageY+"+"+touch.pageX);

	    if($('.finger-container').children().length > 2){
	    	$('.finger-container').children().eq(0).remove();
	    }
	    $(".finger-container").append("<div class='touch-finger touch-finger"+ count +"'></div>");
	    $('.touch-finger'+count).css('top',touch.pageY-11);
	    $('.touch-finger'+count).css('left',touch.pageX-11);
	    $('.touch-finger'+count).addClass('touch-finger-animation');
	    // console.log(count);
		count++;
	}, true);

	// var bubble2 = document.getElementById('bubble2');
	// bubble2.addEventListener('touchstart', function(e) {
	    
	// 	$('#bubble2').css('background','black');
	// }, true);

	// var bubble1 = document.getElementById('bubble1');
	// bubble2.addEventListener('touchstart', function(e) {
	    
	// 	$('#bubble1').css('background','red');
	// }, true);


	$('.bubble1').click(function(){
		$('.bubble1').css('background','red');
	})

	$('.bubble2').click(function(){
		$('.bubble2').css('background','black');
	})

	// $('.ima').click(function(){
	// 	$('.ima').css('background','black');
	// 	console.log('ima');
	// })

	// var _rect = document.querySelector('.touch-finger0');
 //    _rect.addEventListener('webkitTransitionEnd', function () {
 //        console.log(count);
 //    }, false);


	// $(".con-demopie").on("tap",function(){
	// 	$('.touch-finger').css('opacity','1.0');
	// 	$('.touch-finger').css('top','1.0');
	// 	alert(event.touches[0].pageX);
	// });
}]);
