<?php
include "config.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"] ?? "";
$senha = $data["senha"] ?? "";

if (empty($email) || empty($senha)) {
    echo json_encode(["success" => false, "message" => "Preencha todos os campos."]);
    exit;
}

$sql = "SELECT * FROM utilizadores WHERE email = ? AND senha = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $senha);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["success" => true, "message" => "Login efetuado!"]);
} else {
    echo json_encode(["success" => false, "message" => "Credenciais incorretas."]);
}

$conn->close();
?>
