<?php

$data = json_decode(file_get_contents("php://input"));
$to = $data->emailId;
$role =$data->urole;
$message =$data->msg;
$subject = "Invitation for creating User";
$txt = "Hello Dear" . "<br>" . "This mail is regarding for We invite you for create your account on our website on clicking of given link." . "<br>" . "<br>" . $message . "<br>" . "Role :- " . $roll;

$headers = "From: satyam@excellencetechnologies.in" . "\r\n" .
"CC: satyam@excellencetechnologies.in";

mail($to,$subject,$txt,$headers);
?>