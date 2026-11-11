<?php
/**
 * Conexión Segura a Base de Datos - Proyecto 2.CV G.D.R.P.
 * Servidor Plesk / Axarnet
 */
$host = 'localhost';
$dbname = 'saludcon_cv_db'; // Reemplazar con tu base de datos activa
$username = 'saludcon_db_user'; // Reemplazar con tu usuario de BD
$password = 'TU_PASSWORD_SEGURO'; // Reemplazar con tu contraseña

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    error_log("Error de conexión a la Base de Datos: " . $e->getMessage());
    die("Error crítico de conectividad con la base de datos institucional.");
}
?>
