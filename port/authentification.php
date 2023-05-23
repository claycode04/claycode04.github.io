<?php

session_start();
if(!(isset($_SESSION['profile']))){
  header("location:login_n.php");
}


?>