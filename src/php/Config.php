<?php
$host = "localhost";
$user = "root";
$pass = ""; 
$dbname = "projetopap"; // o nome da tua base de dados

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
?>
