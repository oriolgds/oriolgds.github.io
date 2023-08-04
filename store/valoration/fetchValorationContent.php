<?php
require_once "database.php";
if(isset($_GET['min']) && isset($_GET['max']) && isset($_GET['projectID'])){
    $min = $_GET['min'];
    $max = $_GET['max'];
    $projectID = $_GET['projectID'];
    $query = "SELECT valorations.content, users.username, valorations.stars, valorations.publishDate FROM `valorations`, `users` WHERE users.id = valorations.userID AND valorations.projectID = $projectID AND valorations.content IS NOT NULL AND LENGTH(valorations.content) > 0 LIMIT $min, $max; ";
    $sql = mysqli_query($database, $query);
    $sql = mysqli_fetch_array($sql);
    die($sql);
}
die();
?>