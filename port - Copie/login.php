<?php
require_once 'conn.php';
$useradmin=$_POST['userr'];
$password=$_POST['passwordd'];
$sql=$pdo->prepare("SELECT * from admin_info where userr='$useradmin' and passwordd='$password'");
$sql->execute();

if($useradmin = $sql->fetch()){
    session_start();
    $_SESSION['profile']=$useradmin;
 header('location:admin.php');
}
else{
    header('location:login_n.php');
}