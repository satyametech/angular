<?php

require 'config.php';

$data = json_decode(file_get_contents("php://input"));
$name = $data->name;
$remail = $data->remail;
$rpassword = $data->rpassword;
//$rpas= ($data->rpass);
$role = $data->role;
$date_of_birth=$data->date_of_birth;

$insert_query = "insert into logindata (name,email,password,role,date_of_birth) VALUES ('$name','$remail','$rpassword','$role','$date_of_birth') ";
$insert_result = mysqli_query($conn,$insert_query);

?>
