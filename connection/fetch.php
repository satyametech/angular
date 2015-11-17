<?php

require 'config.php';


//Retriveing data using JSON & AJAX
$result = mysqli_query($conn,"SELECT * FROM logindata ORDER BY id DESC");

$array_res = array();
$i = 0;


while ($resultset = mysqli_fetch_array($result)) {
    $array_res[$i] = array("id" => $resultset['id'], "name" => $resultset['name'], "email" => $resultset['email'], "password" => $resultset['password'], "role" => $resultset['role'],"date_of_birth"=>$resultset['date_of_birth']);
    $i++;
}
echo json_encode($array_res);
  
?>

