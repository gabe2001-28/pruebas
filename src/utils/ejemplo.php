<?php
$use 'pdoconfig.php';
$servername = "db1";
$database = "databasename";
$username = "username";
$password = "password";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username);
    echo "Conectado a $dbname de $host con éxito.";
} catch (PDOException $pe) {
    die("No es posible la conexión a $dbname: " . $pe->getMessage());
}
?>
