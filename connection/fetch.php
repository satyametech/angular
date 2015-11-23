<?php

require 'config.php';

$page=$_REQUEST['page'];
//Retriveing data using JSON & AJAX
$result = mysqli_query($conn,"SELECT * FROM logindata ORDER BY id DESC LIMIT $page,5");
$result2=  mysqli_query($conn,"SELECT COUNT(*) as count FROM logindata");
$array_res = array();
$i = 0;


while ($resultset = mysqli_fetch_assoc($result)) {
    //$array_res[$i] = array("id" => $resultset['id'], "name" => $resultset['name'], "email" => $resultset['email'], "password" => $resultset['password'], "role" => $resultset['role'],"date_of_birth"=>$resultset['date_of_birth']);
    //$i++;
	$new[]=$resultset;
}
$resultset2 = mysqli_fetch_array($result2);
$array_res = array("data"=>$new,"length"=>$resultset2);
echo json_encode($array_res);
  
?>

