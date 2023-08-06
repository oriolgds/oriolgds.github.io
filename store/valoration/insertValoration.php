<?php
require_once "database.php";
if(isset($_POST['projectID']) && isset($_POST['stars']) && isset($_POST['observations'])){
    $projectID = $_POST['projectID'];
    $stars = $_POST['stars'];
    $observations = $_POST['observations'];
    session_start();
    $userID = $_SESSION['userID'];


    // First, check if the valoration already exists
    $query = "DELETE FROM valorations WHERE projectID = '$projectID' AND userID = '$userID';";
    mysqli_query($database, $query);
    // Second insert the new valoration
    $query = "INSERT INTO `valorations` (`id`, `projectID`, `stars`, `content`, `publishDate`, `userID`) VALUES (NULL, '$projectID', '$stars', '$observations', NOW(), '$userID');";
    $sql = mysqli_query($database, $query);
    die("Inserted successfully");
}

?>