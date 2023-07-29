<?php

class DatabaseConnection
{
    private $host;
    private $dbname;
    private $username;
    private $password;
    private $connection;

    public function __construct($host, $dbname, $username, $password)
    {
        $this->host = $host;
        $this->dbname = $dbname;
        $this->username = $username;
        $this->password = $password;
    }

    public function connect()
    {
        try {
            $dsn = "mysql:host={$this->host};dbname={$this->dbname};charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            $this->connection = new PDO($dsn, $this->username, $this->password, $options);
            return true;
        } catch (PDOException $e) {
            // Handle connection errors here (e.g., log the error, show a user-friendly message, etc.)
            return false;
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }

    public function closeConnection()
    {
        $this->connection = null;
    }
}

// Usage:
// Replace 'your_host', 'your_database_name', 'your_username', and 'your_password' with actual database details
$database = new DatabaseConnection('your_host', 'your_database_name', 'your_username', 'your_password');

if ($database->connect()) {
    // The connection was successful.
    // You can use $database->getConnection() to get the PDO connection object and perform queries.
    // For example:
    // $pdo = $database->getConnection();
    // $stmt = $pdo->prepare('SELECT * FROM your_table');
    // $stmt->execute();
    // $result = $stmt->fetchAll();

    // Don't forget to close the connection when you're done:
    // $database->closeConnection();
} else {
    // The connection failed. Handle this accordingly.
}

?>
