

<?php
session_start();
require_once 'conn.php';

$req="SELECT * FROM `contact`";

$ps = $pdo->prepare($req);
$ps->execute();



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="tools/login.css">
     <link rel="stylesheet" href="tools/table.css">
     <link rel="stylesheet" href="tools/nav.css">
    <title>admin</title>
   
</head>
<body>

<nav>
        <div class="nav-center">
            <!-- nav header -->
            <div class="nav-header">
              <a href="index.html">
                <img
                    src="tools/imgs/icon.png"
                    alt="" class="logo" alt="logo" /></a>
                   
            </div>
             
            
                
                
            
        
    </nav> 
<video id="background-video" autoplay loop muted>
  <source src="tools/imgs/vd.mp4" type="video/mp4">
 
</video>
<h1><?php   echo 'welcome  '. $_SESSION['profile']['userr'] ?></h1>
<table>
    <thead>
  <tr>
    
    <th>userName</th>
    <th>Email</th>
    <th>message</th>
    
  </tr>
  <tr>

  </thead>
  <tbody>
    <?php
while($info=$ps->fetch()){?>
<tr>
    <td><?php echo ($info['username']) ?></td>
    <td><?php echo ($info ['email']) ?></td>
    <td><textarea name="" id="" cols="30" rows="10"><?php echo ($info['message']) ?></textarea></td>
    

  </tr>
<?php } ?>
  </tbody>
  
</table>

<script src="tools/navscript.js"></script>
</body>
</html>