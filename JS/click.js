google.maps.event.addDomListener(window, 'load', initialize); 

function linkedin() {
    console.log("linkedin");
    window.open('http://www.linkedin.com/in/dongyu-wu97')

}

function git() {
    console.log("github");
    window.open('https://github.com/vincent-9-7') //新窗口打开
    // window.location.href = 'https://github.com/vincent-9-7'; //相同页面打开
}

function initialize() {
	// console.log('1');

	var myCenter = new google.maps.LatLng(-27.498656465716774, 153.03900498463784);
	var content = '';
	// 1. 添加不同样式的地图
	var mapProp1 = {
		center:myCenter,
		zoom:10,
		mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp1);
	
	// 3. 添加红色跳跃指针标记
	var marker2 = new google.maps.Marker({
		position:myCenter,
		animation:google.maps.Animation.BOUNCE,
		title: 'Hover to Zoom in.'
		});
	marker2.setMap(map);

	// 6.2 鼠标滑动到指针，缩进，缩放
	google.maps.event.addListener(marker2,'mouseover',function(){
		map.setZoom(14);
	  	map.setCenter(marker2.getPosition());
	});
	google.maps.event.addListener(marker2,'mouseout',function(){
		map.setZoom(10);
	  	map.setCenter(marker2.getPosition());
	});

	// 7.拖离maker中心3秒后，地图自动返回中心
	google.maps.event.addListener(map,'center_changed',function() {
		window.setTimeout(function() {
    		map.panTo(marker2.getPosition());
  		},4000);
	});

    // 8.用户开始拖拽地图,倒计时开始
    var second = 3;
    var count;
	google.maps.event.addListener(map,'dragstart',function(){
        count = setInterval(checkTime,1000); // 使用定时器实现每一秒写一次时间
        
    }); 
    
	function checkTime(){
		if(second == -1) {
            second = 3;            
            clearInterval(count);
		}else{
            console.log(second);
			second --;
        }
    }

       
    // 5.用户开始拖拽地图， 添加指针上的信息窗口 
    google.maps.event.addListener(map,'dragstart',function(){
        var contents = "This is my location."
        var infowindow = new google.maps.InfoWindow({
            content:contents
        });
        infowindow.open(map,marker2);
        setTimeout(function () { infowindow.close(); }, 4000); //4秒钟后关闭
    });

  		


	// n. 运行地图,可以放在html的<script>里
	// google.maps.event.addDomListener(window, 'load', initialize);
}

    

