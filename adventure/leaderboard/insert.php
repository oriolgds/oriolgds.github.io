<?php
require "database.php";
if(isset($_GET['name']) && isset($_GET['time']) && isset($_GET['money']) && isset($_GET['milseconds'])){
    $name = $_GET['name'];
    $time = $_GET['time'];
    $money = $_GET['money'];
    $milseconds = $_GET['milseconds'];
    $query = "INSERT INTO `records` (`id`, `name`, `time`, `milseconds` `money`, `date`) VALUES (NULL, '$name', '$time', '$money', NOW()); ";
    mysqli_query($connection, $query);
    die("INSERTED");
}
?>