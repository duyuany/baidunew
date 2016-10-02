$(document).ready(function(){
	
//	新闻菜单栏的收起与展开功能
	
	  $(".less").click(function(){
	  	   $(".clearfix li:gt(9)").hide();
	  	   $(".more_news").show();	  	
	  });
	  $(".more_news").click(function(){
	  	 $(this).hide();
	  	 $(".clearfix li:gt(9)").show();
	  })
	  
//	  新闻图片轮播图功能

      var item_width=$(window).width()-34;
      var num=0;
      var pot_num=0;
   
      $(".carousel-content img").css({"width":item_width});
      $(".carousel-item-wrap").css({"width":item_width*4});

//   setInterval(function(){	   
//	       if(num==3){
//	       	    num=0;
//	       	    $(".carousel-item-wrap").css("left",0);
//	       	    $(".carousel-item-wrap").animate({ "left":0}, 0 );
//	       }	       
//	       $(".carousel-item-wrap").animate({ "left":$(".carousel-item-wrap").position().left-item_width}, 300 );	      
//	       num++;
////	       蓝色小圆点
//	       if(pot_num==3){
//	       	  pot_num=0;
//	       }
//	       $(".carousel-nav div").eq(pot_num).addClass("selected").siblings().removeClass("selected");
//	       
//	       pot_num++
//	       	       	       
//   },1000);
     
//   热点新闻自动推送
   
     var new_index=0;
     var news_height=$(".hot-news-item").height();
     var news_num=$(".hot-news-item").length;

     
    setInterval(function(){
    	
    	$(".hot-news-content").animate({
    		"margin-top":-news_height*new_index
    	},300);
    	new_index++;
    	if(new_index==news_num){
    		new_index=0;
    		$(".hot-news-content").animate({
    		"margin-top":-news_height*new_index
    	},0);
    	}
    },1000);
    
    
//  新闻页面的切换
     //初始化，加载”推荐“菜单的新闻
     
    $(".newslist-container").children().hide();
    $(".recommend_news").show();
//  推荐
  $(".nav_recommand").click(function(){
  	   $(".recommend_news").show().siblings().hide();
  });
  //  百家
  $(".nav_baijia").click(function(){
  	   $(".baijia_news").show().siblings().hide();
  });
   //  本地
  $(".nav_local").click(function(){
  	   $(".local_news").show().siblings().hide();
  });
  
  
//ajax向后台调数据
$.ajax({  
             url:'php/getdata.php',  
             type: 'GET',  
             dataType: 'json',  
             timeout: 1000,  
             cache: false,  
             beforeSend: LoadFunction, //加载执行方法    
             error: erryFunction,  //错误执行方法    
             success: succFunction //成功执行方法    
         });
         
          function LoadFunction() {  
             $("#list").html('加载中...');  
         };
         function erryFunction() {  
             alert("error");  
         };  
         function succFunction(tt) {         
  
             var json = eval(tt); //数组         
             $.each(json, function (index, item) {  
                 //循环获取数据    
                 var newsid = json[index].newsid; 
                 var newstype = json[index].newstype;  
                 var newstitle = json[index].newstitle;  
                 var newsimg = json[index].newsimg;  
                 var newscontent= json[index].newscontent;
                  var addtime= json[index].addtime; 
                 var keyword= json[index].keyword; 

                    //动态创建新闻列表将后台取得的数据新闻列表
        
				  var  div_item=$('<div class="index-list-item"></div>');			 
                  var  div_main=$('<div class="index-list-main showleft"></div>');
                   div_main.appendTo(div_item);
                  var  div_image=$('<div class="index-list-image"></div>');
                  div_image.appendTo(div_main);
                   $('<i class="ivideoplay"></i>').appendTo(div_image);
                   $("<img src="+newsimg+">").appendTo(div_image);
                  var  div_text=$('<div class="index-list-main-text"></div>');
                  div_text.appendTo(div_main);
                  var  div_title=$('<div class="index-list-main-title">'+newstitle+'</div>');
                  var  div_bottom=$('<div class="index-list-bottom"></div>');
                  var  div_time=$('<div class="index-list-main-time"></div>');
                  div_title.appendTo(div_text);
                  div_bottom.appendTo(div_text);
                  div_time.appendTo(div_bottom);
                  $('<b class="tip-time">'+addtime+'</b>').appendTo(div_time);
                  $('<b class="tip-hot tip-fillred">'+keyword+'</b>').appendTo(div_time);
//            根据新闻类型插入对应的新闻列表
                  if(newstype=="推荐"){
                  	div_item.appendTo($('.recommend_news'));
                  }else if(newstype=="百家"){
                  	div_item.appendTo($('.baijia_news'));
                  }else if(newstype=="本地"){
                  	div_item.appendTo($('.local_news'));
                  }
                 
      
                 
                 
                 
                         
                 
             });
         }  
	

  


});
