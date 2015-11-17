<?php

require 'config.php';

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;


$query = "SELECT * FROM logindata WHERE email = '$email' and password = '$password'";

$query_result = mysqli_query($conn,$query);
$row = mysqli_fetch_row($query_result);

if (mysqli_num_rows($query_result) == 1) {
    $login = true;
} else {
    $login = false;
}

if ($login) {
   
    

    $arr = array("msg" => "Success", "role" => $row[5]);
    $json = json_encode($arr);
    print_r($json);
} 
else {

    $arr = array("msg" => "UnSuccess");
    $json = json_encode($arr);
    print_r($json);

    echo 'error';
}
die;