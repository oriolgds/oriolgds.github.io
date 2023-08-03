<?php
require_once "database.php";
if(isset($_GET['projectID']) && $_GET['avg'] == "true"){
    $projectID = $_GET['projectID'];
    $query = "SELECT AVG(`stars`) AS 'AVG' FROM `valorations` WHERE projectID = $projectID; ";
    $sql = mysqli_query($database, $query);
    $sql = mysqli_fetch_array($sql);
    die($sql[0]);
}
else if(isset($_GET['projectID']) && $_GET['avg'] == "false"){
    $projectID = $_GET['projectID'];
    $array = array();
    for ($i=1; $i <= 5; $i++) { 
        $query = "SELECT COUNT(`id`) AS 'COUNT' FROM `valorations` WHERE projectID = $projectID AND stars = $i;";
        $sql = mysqli_query($database, $query);
        $sql = mysqli_fetch_array($sql);
        $array[$i - 1] = $sql[0];
    }
    die(json_encode($array));
}
die;

?>