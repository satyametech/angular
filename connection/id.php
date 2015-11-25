<?php

require 'config.php';
$data = json_decode(file_get_contents("php://input"));
$sub = $data->sub;
$id=$_REQUEST['id'];
$sql = "SELECT id FROM logindata where id='$id'";
$result=  mysqli_query($conn, $sql);
while ($resultset = mysqli_fetch_assoc($result)) {
    $new[] = $resultset;
}

echo json_encode($new);
die();
?>