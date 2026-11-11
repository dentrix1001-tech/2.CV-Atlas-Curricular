<?php
/**
 * Gestor de Envío de Correos y Avisos de Renovación
 */
function enviarCorreoNotificacion($destinatario, $asunto, $mensajeHtml) {
    $remitente = "no-reply@saludconnutricion.com";
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $cabeceras .= 'From: 2.CV DigiThinkingers <' . $remitente . '>' . "\r\n";
    $cabeceras .= 'Reply-To: ' . $remitente . "\r\n";

    return mail($destinatario, $asunto, $mensajeHtml, $cabeceras);
}
?>
