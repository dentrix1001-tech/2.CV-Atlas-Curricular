<?php
require_once 'includes/parser-cv.php';

$datosMapeados = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['cv_file'])) {
    $datosMapeados = parsearCVUpload($_FILES['cv_file']);
} else {
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Editor Modular del 2.CV</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <div class="container" style="max-width: 900px; margin-top: 30px;">
    <div class="sec-block">
      <h1 class="sec-title"><span>2</span> Editor Modular y Previsualización</h1>
      <p style="margin-bottom: 16px; font-size: 0.9rem;">
        Revisa y edita los datos extraídos antes de publicar tu página web definitiva.
      </p>

      <form action="publicar.php" method="POST">
        <div class="card-box">
          <h3>Datos Personales</h3>
          <label>Nombre Completo:</label>
          <input type="text" name="nombre" value="<?php echo htmlspecialchars($datosMapeados['datos_personales']['nombre']); ?>" style="width:100%; padding:8px; margin:6px 0 12px 0;">
          
          <label>Correo Electrónico (Para avisos y renovación a los 3 meses):</label>
          <input type="email" name="email" required placeholder="tu-correo@dominio.com" style="width:100%; padding:8px; margin:6px 0 12px 0;">

          <label>Teléfono:</label>
          <input type="text" name="telefono" value="<?php echo htmlspecialchars($datosMapeados['datos_personales']['telefono']); ?>" style="width:100%; padding:8px; margin:6px 0 12px 0;">
        </div>

        <div class="card-box">
          <h3>Presentación / Extracto</h3>
          <textarea name="presentacion" rows="4" style="width:100%; padding:8px;"><?php echo htmlspecialchars($datosMapeados['presentacion']); ?></textarea>
        </div>

        <input type="hidden" name="cv_json" value="<?php echo htmlspecialchars(json_encode($datosMapeados)); ?>">
        
        <button type="submit" class="ctrl-btn" style="width: 100%; justify-content: center; padding: 14px; background: #16a34a; font-size: 1.05rem;">
          <i class="fa-solid fa-cloud-arrow-up"></i> Validar y Publicar mi 2.CV Definitivo
        </button>
      </form>
    </div>
  </div>
</body>
</html>
