google.maps.event.addDomListener(window, 'load', initialize); 
window.onscroll = function() {onscrolling()}; //blog页面浮动窗口，自动启动

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


function onscrolling(){
    var winScroll = document.body.scrollTop || 
		document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - 
		document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    //获取对象长度： Object.keys(display_none).length
    // var display_block = {1:"ss",2:"aa"}
    
    if (scrolled < 2) {
        document.getElementById('page__on-scroll').style.display = 'none';
        document.getElementById('page__scroll-flash').style.display = 'none';
    }
    if (scrolled > 2) {
        document.getElementById('page__on-scroll').style.display = 'block';
        document.getElementById('page__on-scroll').innerHTML = 'Rottnest Island';
    }
    if (scrolled >10.5) {
        document.getElementById('page__on-scroll').innerHTML = 'Setting Sun';
    }
    if (scrolled > 22) {
        document.getElementById('page__on-scroll').innerHTML = 'Lighting Huose';
    }
    if (scrolled > 47) {
        document.getElementById('page__on-scroll').innerHTML = 'Rottnest Island';
    }
    if (scrolled > 59) {
        document.getElementById('page__on-scroll').innerHTML = 'Quokka';
    }
    if (scrolled > 71) {
        document.getElementById('page__on-scroll').innerHTML = 'Sea Mew';
    }
    if (scrolled > 95) {
        document.getElementById('page__on-scroll').innerHTML = 'Beach';

    }

    if (scrolled > 95) {
        document.getElementById('page__on-scroll-to-top').style.display = 'block'; 
    }
    else{
        document.getElementById('page__on-scroll-to-top').style.display = 'none'; 
    }

    if (scrolled > 2) {
        var width = scrolled/100*290
        document.getElementById('page__scroll-flash').style.display = 'block';
        document.getElementById('page__scroll-flash').style.width = width+'px';
    }

    
}

function tothetop(){
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
   
}