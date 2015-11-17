<?php

require 'config.php';

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;


//Deleting data using JSON & AJAX
$result = mysqli_query($conn,"DELETE FROM logindata WHERE id = '$id'");


echo json_encode($array_res);
?>