<?php
/**
 * Cron Job Diario para control de caducidad (3 meses) y borrado automático
 * Configurar en Plesk para ejecutarse una vez al día a las 00:00 h.
 */
require_once 'includes/db-conexion.php';
require_once 'includes/mailer.php';

// 1. Enviar avisos 7 días antes de expirar
$fechaAvisoLimite = date('Y-m-d H:i:s', strtotime('+7 days'));
$stmtAvisos = $pdo->prepare("SELECT * FROM cv_registros WHERE fecha_expiracion <= ? AND estado = 'activo' AND aviso_enviado = 0");
$stmtAvisos->execute([$fechaAvisoLimite]);
$pendientesAviso = $stmtAvisos->fetchAll();

foreach ($pendientesAviso as $cv) {
    $enlaceRenovacion = "https://saludconnutricion.com/generador-cv/renovar.php?token=" . $cv['token'];
    $mensaje = "<p>Hola, tu 2.CV en HTML expira en pocos días. Si deseas mantenerlo activo, haz clic aquí:</p><p><a href='{$enlaceRenovacion}'>Renovar vigencia</a></p>";
    
    enviarCorreoNotificacion($cv['email'], "Aviso: Tu 2.CV caduca próximamente", $mensaje);
    
    $upd = $pdo->prepare("UPDATE cv_registros SET aviso_enviado = 1 WHERE id = ?");
    $upd->execute([$cv['id']]);
}

// 2. Borrar ficheros expirados
$ahora = date('Y-m-d H:i:s');
$stmtExpirados = $pdo->prepare("SELECT * FROM cv_registros WHERE fecha_expiracion <= ? AND estado = 'activo'");
$stmtExpirados->execute([$ahora]);
$expirados = $stmtExpirados->fetchAll();

foreach ($expirados as $cvExpirado) {
    $rutaFichero = __DIR__ . "/cv-generados/" . $cvExpirado['archivo_html'];
    if (file_exists($rutaFichero)) {
        unlink($rutaFichero); // Borrado físico del servidor
    }
    
    $updExp = $pdo->prepare("UPDATE cv_registros SET estado = 'expirado' WHERE id = ?");
    $updExp->execute([$cvExpirado['id']]);
}

echo "Cron ejecutado correctamente a las " . date('Y-m-d H:i:s');
?>
