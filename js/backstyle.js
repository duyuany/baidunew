$(document).ready(function(){
	$(".news_data_list").show();
	$(".news_edit_form").hide();
	$(".upload_news").click(function(){
		
		$(".news_edit_form").show();
		$(".news_data_list").hide();
		
	})	
	$(".news_manage").click(function(){
		$(".news_edit_form").hide();
		$(".news_data_list").show();
	});
	
//	从后台获取数据

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
             $("#list").html('');  
  
             //eval将字符串转成对象数组  
             //var json = { "id": "10086", "uname": "zhangsan", "email": "zhangsan@qq.com" };  
             //json = eval(json);  
             //alert("===json:id=" + json.id + ",uname=" + json.uname + ",email=" + json.email);  
  
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
//               $("#list").html($("#list").html() + "<br>" + newstitle + " - " + newsimg + " - " + newscontent+ "<br/>");  
             
             
                    //              动态创建表格将后台取得的数据放进表格
                 var tr=$("<tr></tr>");
                  tr.appendTo($('.news_table'));
                 
                  $("<td>"+newsid+"</td>").appendTo(tr);;
                  $("<td>"+newstype+"</td>").appendTo(tr);
                  $("<td>"+newstitle+"</td>").appendTo(tr);
                  $("<td>"+newsimg+"</td>").appendTo(tr);
                  $("<td>"+newscontent+"</td>").appendTo(tr);
                  $("<td>"+addtime+"</td>").appendTo(tr);
                  $("<td>"+keyword+"</td>").appendTo(tr);
                 
                  
                 
      
                 
                 
                 
                 
                 
                 
             });
         }  
	
})