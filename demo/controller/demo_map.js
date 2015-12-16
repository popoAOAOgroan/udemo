'use strict';

 angular.module('myApp.demo_map', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo_map', {
    templateUrl: 'template/demo_map.html',
    controller: 'demoMapCtrl'
  });
}])

.controller('demoMapCtrl',['$scope', function($scope) {
		$scope.$emit("MainCtrNameChange", 'Baidu Map');

		var longitude = 121.51161347080911;
		var latitude = 31.302337970160234;

		getLocation();
		var x=document.getElementById("demo-map");
		function getLocation()
		{
		  if (navigator.geolocation)
		  {
		    navigator.geolocation.getCurrentPosition(showPosition);
		  }
		  else{x.innerHTML="Geolocation is not supported by this browser.";}
		}
		function showPosition(position)
		{
		  // x.innerHTML="Latitude: " + position.coords.latitude +
		  // "<br />Longitude: " + position.coords.longitude;
		  longitude = position.coords.longitude;
		  latitude = position.coords.latitude;
		}

		$scope.getLocation = function () {
			x.innerHTML="longitude+"+longitude+"<br/>latitude+"+latitude;
			$scope.mapOptions = {
				center: {
	                longitude: longitude,
	                latitude: latitude
            	},
            	markers: [{
	                longitude: longitude,
	                latitude: latitude,
	                icon: 'http://img.coolwp.com/wp-content/uploads/2015/04/48-map-marker.png',
	                width: 48,
	                height: 48,
	                title: '当前位置',
	                content: '五角场'
            	}]
        	}
		}

        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 15,
            city: 'Shanghai',
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'http://img.coolwp.com/wp-content/uploads/2015/04/48-map-marker.png',
                width: 48,
                height: 48,
                title: '当前位置',
                content: '五角场'
            }]
        };
	
}]);

// window.onload = function() {
// alert("1");
// 	var map = new BMap.Map("container");          // 创建地图实例  
// 	var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
// 	map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
// };