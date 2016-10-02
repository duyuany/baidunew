<?php
header("Content-type: application/json; charset=utf-8");
$conn = new mysqli("localhost", "root", "", "test");
//mysql_query("set character set 'utf8'");
mysqli_query($conn,"SET NAMES utf8");
//读库 
mysql_query("SER NAMES 'utf8'");

$sql = "SELECT * FROM baidu_news";
if ($conn -> query($sql) === !TRUE) {
echo "Error: " . $sql . "<br>" . $conn -> error;
}else{

$result = $conn->query($sql);
$arr=array();
if ($result->num_rows > 0) {
    // 输出每行数据
    while($row = $result->fetch_assoc()) {
    array_push($arr,array("newsid"=>$row["newsid"],"newstype"=>$row["newstype"],"newstitle"=>$row["newstitle"],"newsimg"=>$row["newsimg"],"newscontent"=>$row["newscontent"],"addtime"=>$row["addtime"],"keyword"=>$row["keyword"]));
    }
} else {
    echo "0 results";
}
echo json_encode($arr);	
}	