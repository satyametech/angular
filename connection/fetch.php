<?php

require 'config.php';

$page = $_REQUEST['page'];
//Retriveing data using JSON & AJAX
$result = mysqli_query($conn, "SELECT * FROM logindata ORDER BY id DESC LIMIT $page,5");
$result2 = mysqli_query($conn, "SELECT COUNT(*) as count FROM logindata");
$array_res = array();
$i = 0;
$new2 = array();

while ($resultset = mysqli_fetch_assoc($result)) {
    //$array_res[$i] = array("id" => $resultset['id'], "name" => $resultset['name'], "email" => $resultset['email'], "password" => $resultset['password'], "role" => $resultset['role'],"date_of_birth"=>$resultset['date_of_birth']);
    // $i++;
    $id = $resultset['id'];
    $new3 = array();
    $nsql = "SELECT email,address, invite_by FROM `invite` WHERE `invite_by`='$id' ";
//$nsql="SELECT  logindata.name FROM logindata INNER JOIN invite ON logindata.email =invite.email";
    $nresult = mysqli_query($conn, $nsql);
    $new[] = $resultset;

    while ($resultset3 = mysqli_fetch_assoc($nresult)) {

        $new3[] = $resultset3;
    }
    if ($new3)
        $new2[] = $new3;
    else
        $new2[] = null;
}
$resultset2 = mysqli_fetch_assoc($result2);
$array_res = array("data" => $new, "length" => $resultset2, "users" => $new2);
echo json_encode($array_res);
?>

