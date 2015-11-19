<?php

require 'config.php';

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$name = $data->name;
$email = $data->email;
$password = $data->password;
$role = $data->role;
$date_of_birth = $data->date_of_birth;


$update_query = "UPDATE logindata SET id='$id', name='$name', email='$email', password='$password', role='$role' date_of_birth='$date_of_birth' WHERE id='$id'";
//$update_query = "UPDATE logindata SET id='4', name='qw', email='rr@rr.in', password='12345', role='guest' WHERE id='3'";

$update_result = mysqli_query($conn,$update_query) or die('error');
echo ("success");

if($update_query){
    $arr = array("msg" => "Success");
    $json = json_encode($arr);
}else{
    $arr = array("msg" => "UnSuccess");
    $json = json_encode($arr);
}
?>