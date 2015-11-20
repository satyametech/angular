<?php
    
$email = $_GET['email'];
$role = $_GET['role'];

$arr = array("mail" =>$email, "role" => $role);
    $json = json_encode($arr);
    print_r($json);

?>