<?php
require_once 'conn.php';
$username=$_POST['username'];
$email=$_POST["email"];
$message=$_POST['message'];

$requete=$pdo->prepare('INSERT into contact (username,email,message) VALUES(?,?,?) ');
$info=array($username,$email,$message);
$requete->execute($info);
header('location:success.php')
?>