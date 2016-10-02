<?php
// 创建连接
header("Content-type: application/json; charset=utf-8");
$conn = new mysqli("localhost", "root", "", "test");
mysql_query("set character set 'utf8'");
//读库 
//mysql_query("SER NAMES 'utf8'");
mysqli_query($conn,"SET NAMES utf8");

//写库
if ($conn -> connect_error) {
	die("Connection failed: " . $conn -> connect_error);
}
	
     
     $newstype=$_REQUEST['newstype'];
     $newstitle=$_REQUEST['newstitle'];
     $newsimg=$_REQUEST['newsimg'];
     $newscontent=$_REQUEST['newscontent'];
     $addtime=$_REQUEST['addtime'];
	 $keyword=$_REQUEST['keyword'];


$sql = "INSERT INTO baidu_news( `newstype`,`newstitle`, `newsimg`, `newscontent`, `addtime`,`keyword`) 
VALUES ('$newstype','$newstitle','$newsimg','$newscontent','$addtime','$keyword')";
if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>
