<?php
require_once "database.php";

class UserCorrect {
    private $database;
    public function __construct($database) {
        $this->database = $database;
    }
    function check($username, $password) {
        $query = 'SELECT COUNT(`id`) AS "COUNT" FROM `users` WHERE username = "'.$username.'" AND password = "'.$password.'"';
        $sql = mysqli_query($this->database, $query);
        $sql = mysqli_fetch_array($sql);
        // This means user exits
        if($sql[0] >= 1){
            return true;
        }
        else {
            return false;
        }
    }
}
$userCorrect = new UserCorrect($database);


?>