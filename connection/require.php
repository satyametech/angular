<?php
    
$email = $_GET['email'];
$role = $_GET['role'];

$arr = array("email" =>$email, "role" => $role);
    $json = json_encode($arr);
    print_r($json);

?>