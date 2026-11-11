<?php
require_once 'includes/db-conexion.php';

$token = $_GET['token'] ?? '';
if (empty($token)) {
    die("Token de renovación no válido.");
}

$stmt = $pdo->prepare("SELECT * FROM cv_registros WHERE token = ? AND estado = 'activo'");
$stmt->execute([$token]);
$registro = $stmt->fetch();

if ($registro) {
    // Ampliar 90 días adicionales
    $nuevaExpiracion = date('Y-m-d H:i:s', strtotime('+90 days'));
    $update = $pdo->prepare("UPDATE cv_registros SET fecha_expiracion = ? WHERE token = ?");
    $update->execute([$nuevaExpiracion, $token]);

    echo "<div style='text-align:center; margin-top:50px; font-family:sans-serif;'>
          <h2>¡Renovación Exitosa!</h2>
          <p>Tu 2.CV ha sido prorrogado por 3 meses adicionales (hasta el " . date('d/m/Y', strtotime($nuevaExpiracion)) . ").</p>
          <a href='cv-generados/" . htmlspecialchars($registro['archivo_html']) . "' style='display:inline-block; margin-top:20px; padding:10px 20px; background:#16a34a; color:#fff; text-decoration:none; border-radius:5px;'>Ver mi 2.CV</a>
          </div>";
} else {
    echo "El enlace de renovación ha expirado o el registro ya no se encuentra activo.";
}
?>
