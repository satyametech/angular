<?php

require 'config.php';

//$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$name = $data->name;
$email = $data->email;
$password = $data->password;
$role = $data->role;


$update_query = "UPDATE logindata SET id='$id', name='$name', email='$email', password='$password', role='$role' WHERE id='$id'";
//$update_query = "UPDATE logindata SET id='3', name='remsa', email='rr@rr.in', password='12345', role='guest' WHERE id='2'";

$update_result = mysqli_query($conn,$update_query) or die('error');
echo ("hey");

if($update_query){
    $arr = array("msg" => "Success");
    $json = json_encode($arr);
}else{
    $arr = array("msg" => "UnSuccess");
    $json = json_encode($arr);
}
?>