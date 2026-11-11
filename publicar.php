<?php
require_once 'includes/db-conexion.php';
require_once 'includes/mailer.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'] ?? 'Candidato';
    $email = $_POST['email'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $presentacion = $_POST['presentacion'] ?? '';
    
    if (empty($email)) {
        die("El correo electrónico es obligatorio para gestionar la renovación.");
    }

    // Generar token único e identificación del archivo HTML
    $tokenUnico = bin2hex(random_bytes(8));
    $nombreArchivoHtml = "cv_" . $tokenUnico . ".html";
    $rutaCarpetaDestino = __DIR__ . "/cv-generados/";
    $rutaFicheroFinal = $rutaCarpetaDestino . $nombreArchivoHtml;

    // Construir el HTML definitivo basado en tu estructura maestra validada
    $contenidoHtmlDefinitivo = '<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>2.CV - ' . htmlspecialchars($nombre) . '</title>
  <link rel="stylesheet" href="../assets/style.css">
</head>
<body style="padding: 40px; max-width: 900px; margin: 0 auto;">
  <header class="main-header">
    <h1>' . htmlspecialchars($nombre) . '</h1>
    <p><b>Teléfono:</b> ' . htmlspecialchars($telefono) . ' | <b>Email:</b> ' . htmlspecialchars($email) . '</p>
  </header>
  <section class="sec-block">
    <h2>Presentación Profesional</h2>
    <p>' . nl2br(htmlspecialchars($presentacion)) . '</p>
  </section>
  <footer style="text-align:center; margin-top:30px; font-size:0.8rem; color:#64748b;">
    Publicado mediante Plataforma 2.CV DigiThinkingers *.* — Válido por 3 meses.
  </footer>
</body>
</html>';

    // Guardar físicamente el archivo HTML
    if (!file_exists($rutaCarpetaDestino)) {
        mkdir($rutaCarpetaDestino, 0755, true);
    }
    file_put_contents($rutaFicheroFinal, $contenidoHtmlDefinitivo);

    // Registrar en Base de Datos (Expiración a 3 meses: 90 días)
    $fechaExpiracion = date('Y-m-d H:i:s', strtotime('+90 days'));
    $stmt = $pdo->prepare("INSERT INTO cv_registros (token, email, archivo_html, fecha_creacion, fecha_expiracion, estado) VALUES (?, ?, ?, NOW(), ?, 'activo')");
    $stmt->execute([$tokenUnico, $email, $nombreArchivoHtml, $fechaExpiracion]);

    // Enviar correo con enlace público
    $enlacePublico = "https://saludconnutricion.com/generador-cv/cv-generados/" . $nombreArchivoHtml;
    $enlaceRenovacion = "https://saludconnutricion.com/generador-cv/renovar.php?token=" . $tokenUnico;
    
    $mensajeEmail = "
        <h2>¡Tu 2.CV Oficial ha sido publicado con éxito!</h2>
        <p>Puedes acceder a tu página web curricular en el siguiente enlace:</p>
        <p><a href='{$enlacePublico}'>{$enlacePublico}</a></p>
        <p>Esta URL estará activa durante 3 meses. Para mantenerla activa indefinidamente, podrás renovarla mediante este enlace:</p>
        <p><a href='{$enlaceRenovacion}'>Renovar por 3 meses más</a></p>
    ";
    
    enviarCorreoNotificacion($email, "Tu 2.CV Definitivo en HTML ya está disponible", $mensajeEmail);
    
    // Redirigir a página de éxito
    echo "<div style='text-align:center; margin-top:50px; font-family:sans-serif;'>
          <h2>¡CV Publicado Correctamente!</h2>
          <p>Hemos enviado un correo a <b>{$email}</b> con la URL de tu página web y los detalles de renovación.</p>
          <a href='{$enlacePublico}' target='_blank' style='display:inline-block; margin-top:20px; padding:10px 20px; background:#0284c7; color:#fff; text-decoration:none; border-radius:5px;'>Ver mi 2.CV Online</a>
          </div>";
}
?>
