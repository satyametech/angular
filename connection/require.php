<?php

require 'config.php';

$data = json_decode(file_get_contents("php://input"));
    
$email = $data->remail;
$role = $data->role;
$invite_by =$data->id;
$address = $data-> address;

$arr = array("email" =>$email, "role" => $role, "id"=>$invite_by, "address"=>$address);
   $json = json_encode($arr);
   
	

	
$sql= "INSERT INTO `invite` (`role`,`email`, `invite_by`,`address`) VALUES ('$role', '$email', '$invite_by','$address')";	
$result = mysqli_query($conn,$sql) or die('error');


?>