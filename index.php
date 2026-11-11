<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generador Oficial 2.CV — Sube tu Currículum</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <div class="container" style="max-width: 700px; margin-top: 50px;">
    <div class="sec-block">
      <h1 class="sec-title"><span>1</span> Generador Web 2.CV — Subida de Currículum</h1>
      <p style="margin-bottom: 16px; font-size: 0.93rem;">
        Sube tu archivo actual en formato <b>.txt, .pdf o .docx</b>. El sistema extraerá la información y la adaptará automáticamente a la estructura maestra de los 15 módulos del Atlas Curricular.
      </p>
      
      <form action="editor-modular.php" method="POST" enctype="multipart/form-data">
        <div class="card-box" style="text-align: center; padding: 30px;">
          <input type="file" name="cv_file" accept=".txt,.pdf,.docx" required style="margin-bottom: 15px; font-size: 1rem;">
          <p style="font-size: 0.8rem; color: #64748b;">Formatos admitidos: PDF, Word (DOCX) y Texto Plano (TXT)</p>
        </div>
        <button type="submit" class="ctrl-btn" style="width: 100%; justify-content: center; padding: 12px; font-size: 1rem; background: var(--brand-primary); margin-top: 15px;">
          <i class="fa-solid fa-wand-magic-sparkles"></i> Procesar y Adaptar a los 15 Módulos
        </button>
      </form>
    </div>
  </div>
</body>
</html>
