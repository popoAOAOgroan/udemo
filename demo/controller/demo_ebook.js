
'use strict';

 angular.module('myApp.demo_ebook', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_ebook', {
    templateUrl: 'template/demo_ebook.html',
    controller: 'demoEbookCtrl'
  });
}])
 
.controller('demoEbookCtrl',['$scope', '$http', function($scope, $http) {
	$scope.$emit("MainCtrNameChange", 'E-book');

	// 获取json&创建iscroll
	var ebook = new Array();
	var myScroll;
	$http.get('../demo/json/ebook.json').success(function(data){
		ebook = data.ebook;
		$scope.ebook = ebook[0];
		$scope.list = ebook;

		var scrolltimeOut = setTimeout(function(){
			var wrapper = document.getElementById('ebook');
			myScroll = new IScroll(wrapper,{
				//提高性能
				bounce: false,
			    disableMouse: true,
			    disablePointer: true,
				momentum: false,
				scrollbars: false,
				shrinkScrollbars: 'clip',
				preventDefault: false
			});
			myScroll.on('scrollEnd', function () {
			    if ( this.y == this.maxScrollY || this.y == 0) {
					hideBothNav(false);
			    }
			});
			hideBothNav(false);
			clearTimeout(scrolltimeOut);
		},500);
	});

	//隐藏头尾
  	$scope.isHideHeader = false;
  	$scope.showBothNav = function (){
  		hideBothNav(false);
  	};
	function hideBothNav(bool) {
  		$scope.isHideHeader = bool;
		$scope.$emit("HideHeader", bool);
		if (!bool) {
			var hidetimeOut = setTimeout(function(){
		  		$scope.isHideHeader = true;
				$scope.$emit("HideHeader", true);
				clearTimeout(hidetimeOut);
			},4000);
		};
	}

	// 设置字体大小&切换早晚模式
	var fontSize = 1;
	$scope.toggle = true;
	$scope.font = 'font' + fontSize;
	$scope.fontToggle = function(){
		fontSize++;
		if (fontSize>3) {fontSize=1};
		$scope.font = 'font' + fontSize;
	}

	// 显示&隐藏目录
	$scope.catalogueToggle = false;
	$scope.isShowList = false;
	$scope.fadeOutAnimation = false;
	var cataloWrapper;
	$scope.hideList = hideList;
	$scope.showList = function() {
		if (!cataloWrapper) {
			var creatCatelotimeOut = setTimeout(function(){
				var cataloguediv = document.getElementById('catalogueWrapper');
				cataloWrapper = new IScroll(cataloguediv,{
					//提高性能
					bounce: false,
				    disableMouse: true,
				    disablePointer: true,
					momentum: false,
					scrollbars: false,
					shrinkScrollbars: 'clip',
					preventDefault: false
				});
				clearTimeout(creatCatelotimeOut);
			},1000);
		};
	};
	function hideList(){
		$scope.catalogueToggle = true;
		$scope.fadeOutAnimation = false;
		var cataloguetimeOut = setTimeout(function(){
			$scope.isShowList = false;
			clearTimeout(cataloguetimeOut);
		},500);
	}
	//跳转章节
	function overPage(index){
		//index判断待修改
		if (index>0 && index<ebook.length) {
			for(var i = 0; i < ebook.length; i++){
				if(ebook[i].chapters == index){
					$scope.ebook = ebook[i];
					myScroll.scrollTo(0, 0);
					hideList();
					var refreshtimeOut = setTimeout(function(){
						myScroll.refresh();
						clearTimeout(refreshtimeOut);
					},500);
					return;
				};
			};
		};
	}
	$scope.chaptClick = function(index){
		console.log('go to'+index);
		overPage(index);
	};
	$scope.chaptBack = function(index){
		index--;
		console.log('back to'+index);
		overPage(index);
	};
	$scope.chaptNext = function(index){
		index++;
		console.log('next to'+index);
		overPage(index);
	};
}]);