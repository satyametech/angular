<?php 
require 'config.php';

$id= $data->id;

$sql = mysqli_query($conn,"SELECT name,id FROM logindata where role='admin'");

while ($resultset = mysqli_fetch_assoc($sql)){
    $new[]=$resultset;    
}
echo json_encode($new);
?>