$(function () { 
    navigator.geolocation.getCurrentPosition(  
    function(e) { //成功回调  
        console.log(e.coords.accuracy); //准确度  
        console.log(e.coords.latitude); //纬度  
        console.log(e.coords.longitude); //经度  
        console.log(e.coords.altitude); //海拔高度  
        console.log(e.coords.altitudeAccuracy); //海拔高度的精确度  
        console.log(e.coords.heading); //行进方向  
        console.log(e.coords.speed); //地面的速度  
        console.log(new Date(e.timestamp).toLocaleDateString());//采集日期  
        console.log(new Date(e.timestamp).toLocaleTimeString());//采集时间  
        //调用百度api
        translatePoint(e.coords.longitude, e.coords.latitude);  
    },  
    function(e) { //失败回调  
        console.log(e.message); //错误信息  
        console.log(e.code); //错误代码  
    },  
    {//可选参数 JSON格式  
        "enableHighAcuracy": false, //是否启用高精确度模  
        "timeout": 100, //在指定的时间内获取位置信息  
        "maximumAge": 0//浏览器重新获取位置信息的时间间隔  
    }  
    );   
});


function locationSuccess(point, AddressComponent){
    alert('jin');
}

var map;
function translatePoint(longitude, latitude){
    var gpsPoint = new BMap.Point(longitude, latitude);
    BMap.Convertor.translate(gpsPoint, 0, initMap); //转换坐标
    // var point = new BMap.Point(longitude, latitude);  
}

function initMap(point) {  
    map = new BMap.Map("baidumap");  
    map.centerAndZoom(point, 15);  
    map.setCurrentCity("上海");
    map.addControl(new BMap.GeolocationControl()); 
    var marker = new BMap.Marker(point);        // 创建标注    
    map.addOverlay(marker);      
    map.addControl(new BMap.GeolocationControl()); 
    var opts = {    
     width : 250,     // 信息窗口宽度    
     height: 100,     // 信息窗口高度    
     title : "Hello"  // 信息窗口标题   
    }    
    var infoWindow = new BMap.InfoWindow("这是您目前的位置", opts);  // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, map.getCenter());    
    
}  

function searchCurrent(address){

    var options = {      
        onSearchComplete: function(results){      
            if (local.getStatus() == BMAP_STATUS_SUCCESS){      
                // 判断状态是否正确      
                var s = [];      
                for (var i = 0; i < results.getCurrentNumPois(); i ++){      
                    s.push("<div class='log-d'>"+results.getPoi(i).title + " - " + results.getPoi(i).address +"<input type='button' value='Go' onclick='searchTransit()'/> </div>");      
                }      
                document.getElementById("log").innerHTML = s;      
            }      
        },
        renderOptions:{map: map}   
    };      
    var local = new BMap.LocalSearch(map, options);   
    // var local = new BMap.LocalSearch(map, {      
    //       renderOptions:{map: map}      
    // });      
    local.searchInBounds(address,map.getBounds());
}


function goseach(){
    console.log($('.seachinput').val())
    if($('.seachinput').val()){
        searchCurrent($('.seachinput').val());
    }
}

function searchTransit(){
    // alert('a');
    var transit = new BMap.TransitRoute(map, {    
        renderOptions: {map: map, panel: "log"}    
    });    
    transit.search("国定路69号", map.getBounds());
}

    // var map = new BMap.Map("baidumap");          // 创建地图实例  
    // var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
    // map.centerAndZoom(point, 15);  