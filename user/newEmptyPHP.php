<?php

require 'config.php';
$data = json_decode(file_get_contents("php://input"));
$sub = $data->sub;

$sql = "SELECT id,name  FROM logindata  where name = 'satyam'";
$result=  mysqli_query($conn, $sql);
while ($resultset = mysqli_fetch_assoc($result)) {
    $new[] = $resultset;
}

echo json_encode($new);
die();
?>