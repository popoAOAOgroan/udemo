
'use strict';

 angular.module('myApp.demo_ebookv2', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_ebookv2', {
    templateUrl: 'template/demo_ebookv2.html',
    controller: 'demoEbookV2Ctrl'
  });
}])
 
.controller('demoEbookV2Ctrl',['$scope', '$http', function($scope, $http) {
	$scope.$emit("MainCtrNameChange", 'E-book V2');

	//隐藏头尾
  	hideBothNav(true);
  	$scope.showBothNav = function (){
  		hideBothNav(!$scope.isHideHeader);
  	};
	// var hidetimeOut;
	function hideBothNav(bool) {
  		$scope.isHideHeader = bool;
		$scope.$emit("HideHeader", bool);
	}

	// 设置字体大小&切换早晚模式
	var fontSize = 1;
	$scope.toggle = true;
	$scope.font = 'font' + fontSize;
	$scope.fontToggle = function(){
		fontSize++;
		if (fontSize>3) {fontSize=1};
		$scope.font = 'font' + fontSize;
		// setLineHeight();
	}

	//设置行高
	function setLineHeight(){
		var totalH = ebookH - $('.title').height();
		console.log(totalH);
		var temLineNum = totalH/parseInt($('.content').css('line-height'));
		console.log('temLineNum' + temLineNum + 'lineHeight'+ $('.content').css('line-height'));
		var lineHeight = totalH/parseInt(temLineNum);
		console.log(lineHeight);
		// $('.content').css('line-height',lineHeight+'px');
	}

	// 显示&隐藏目录
	$scope.catalogueToggle = false;
	$scope.isShowList = false;
	$scope.fadeOutAnimation = false;
	var cataloWrapper;
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
			},200);
		};
	};
	

	// 初始化 获取json&创建iscroll
	var ebook = new Array();
	var myScroll;
	var currentY,lastY,ebookH,scrollH,totalH;
	$http.get('../demo/json/ebook.json').success(function(data){
		ebook = data.ebook;
		$scope.ebook = ebook[0];
		$scope.list = ebook;
		currentY = 0;
		refresh();
		// hideBothNav(true);
	});

	//切换页
	function setPageTo(y){
		$scope.currentPageNum = currentY/ebookH + 1;
		$('.scrollView').css('transform', 'translate(0,-'+y+'px)');
	}
	//左右点击事件切换页
	var scrollView = document.getElementById("ebook"); 
	scrollView.addEventListener('touchstart', function(e) {
	    // e.preventDefault();
	    var touch = e.touches[0];
		var ScreenW = $(window).width();
		if (touch.pageX<ScreenW/2){//左
			lastPage();
		}else{//右
			nextPage();
		};
	}, true);
	//下一页
	function nextPage(){
		if(currentY+ebookH < totalH){
			currentY += ebookH;
			setPageTo(currentY);
		}else{//跳转下一章
			$scope.chaptNext($scope.ebook.chapters);
		}
	}
	//上一页
	function lastPage(){
		if(currentY-ebookH >= 0){
			currentY -= ebookH;
			setPageTo(currentY);
		}else{//跳转上一章
			$scope.chaptBack($scope.ebook.chapters);
		}
	}
	//选择章节
	$scope.chaptClick = function(index){
		console.log('go to'+index);
		overPage(index);
	};
	//跳转上一章
	$scope.chaptBack = function(index){
		index--;
		console.log('back to'+index+"y:"+currentY);
		if (index>0) {
			overPage(index,lastY);
		}else{
			$scope.isFirstPage = true;
			var fristTimeOut = setTimeout(function(){
				$scope.isFirstPage = false;
				clearTimeout(fristTimeOut);
			},1000);
		};
	};
	//跳转下一章
	$scope.chaptNext = function(index){
		index++;
		console.log('next to'+index);
		lastY = currentY;
		if (index<=ebook.length) {
			overPage(index);
		}else{
			console.log('zuihou');
			$scope.isLastPage = true;
			var lastTimeOut = setTimeout(function(){
				$scope.isLastPage = false;
				clearTimeout(lastTimeOut);
			},1000);
		};
	};
	//跳转章节
	function overPage(index,y){
		//index判断待修改
		for(var i = 0; i < ebook.length; i++){
			if(ebook[i].chapters == index){
				$scope.ebook = ebook[i];
				currentY = y?y:0;
				refresh();
				$scope.isShowList = false;
				// hideList();
				return;
			};
		};
	}
	//刷新 换章 换字体
	$scope.isLoading = true; //loading
	$scope.isFirstPage = false; //提示到第一页
	$scope.islastPage = false; //提示到最后一页
	//dom加载完成/变换高度时 => 调用获取原素高度和当前位置
	function refresh(){
		//loading
		$scope.isLoading = false;
		var loadingTimeOut = setTimeout(function(){
			ebookH = $('.ebook').height();
			scrollH = $('.scrollView').height();
			var x = parseInt(scrollH/ebookH);
			totalH = (x+1)*ebookH;
			// setLineHeight();
			$scope.totalPageNum = x+1;
			$scope.currentPageNum = currentY/ebookH + 1;
			setPageTo(currentY);
			$scope.isLoading = true;
			clearTimeout(loadingTimeOut);
		},1000);
	}
}]);