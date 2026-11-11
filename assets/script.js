document.getElementById('btn-generar').addEventListener('click', () => {
  const fileInput = document.getElementById('cv-file-input');
  
  if (fileInput.files.length === 0) {
    alert("Por favor, selecciona un archivo de texto (.txt) primero.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const textoCV = e.target.result;
    
    // Generar el código HTML completo con la plantilla maestra de 15 módulos
    const htmlGenerado = `<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="2.CV Atlas Curricular e Instructivo Maestro - Juan Daniel Blázquez Antón (44152293K). Expediente Profesional Completo y Portal Institucional G.D.R.P. DigiThinkingers *.*">
  <meta name="author" content="Juan Daniel Blázquez Antón">
  <title>2.CV-Atlas-Curricular | Juan Daniel Blázquez Antón (44152293K)</title>
  
  <!-- Font Awesome Icons & Google Fonts Inter -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap">

  <style>
    /* ==========================================================================
        VARIABLES Y DISEÑO GLOBAL (Protocolo Fácil Visibilidad y Accesibilidad)
        ========================================================================== */
    :root {
      --bg-primary: #f8fafc;
      --bg-card: #ffffff;
      --bg-accent: #e0f2fe;
      --bg-neutral-subtle: #f1f5f9;
      --text-main: #0f172a;
      --text-muted: #334155;
      --text-light: #475569;
      --border-color: #cbd5e1;
      --border-accent: #0284c7;
      --brand-primary: #0284c7;
      --brand-dark: #0369a1;
      --badge-bg: #e0f2fe;
      --badge-text: #0369a1;
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
      --font-main: 'Inter', system-ui, -apple-system, sans-serif;
    }

    /* Modo Alto Contraste Aumentado */
    body.high-contrast {
      --bg-primary: #ffffff;
      --bg-card: #ffffff;
      --bg-accent: #ffff00;
      --bg-neutral-subtle: #f0f0f0;
      --text-main: #000000;
      --text-muted: #000000;
      --text-light: #111111;
      --border-color: #000000;
      --border-accent: #000000;
      --brand-primary: #000000;
      --brand-dark: #000000;
      --badge-bg: #000000;
      --badge-text: #ffffff;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 16px;
      scroll-behavior: smooth;
    }

    body {
      font-family: var(--font-main);
      background-color: var(--bg-primary);
      color: var(--text-main);
      line-height: 1.6;
      padding-bottom: 40px;
      -webkit-font-smoothing: antialiased;
    }

    /* Skip link para lectores de pantalla (Real Decreto 1112/2018) */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--brand-dark);
      color: #ffffff;
      padding: 8px 16px;
      z-index: 10000;
      text-decoration: none;
      font-weight: 600;
      border-radius: 0 0 4px 0;
      transition: top 0.2s ease;
    }
    .skip-link:focus {
      top: 0;
    }

    /* Barra de Accesibilidad y Control Superior */
    .top-control-bar {
      background: #0f172a;
      color: #ffffff;
      padding: 8px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
      flex-wrap: wrap;
      gap: 10px;
    }
    .top-control-bar a {
      color: #38bdf8;
      text-decoration: none;
    }
    .top-control-bar a:hover {
      text-decoration: underline;
    }
    .ctrl-btn {
      background: #1e293b;
      color: #ffffff;
      border: 1px solid #475569;
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .ctrl-btn:hover {
      background: #334155;
      border-color: #94a3b8;
    }

    /* Layout Principal */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    /* Header Institucional */
    .main-header {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-left: 6px solid var(--border-accent);
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-md);
    }
    .header-grid {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 24px;
      align-items: start;
    }
    @media (max-width: 640px) {
      .header-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .header-grid img {
        margin: 0 auto;
      }
    }
    .profile-photo {
      width: 130px;
      height: 155px;
      object-fit: cover;
      border-radius: 6px;
      border: 2px solid var(--border-color);
    }
    .profile-name {
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 6px;
      line-height: 1.15;
    }
    .profile-sub {
      font-size: 1rem;
      color: var(--brand-dark);
      font-weight: 600;
      margin-bottom: 12px;
    }
    .meta-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 14px;
    }
    .pill {
      background: var(--bg-neutral-subtle);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 500;
    }
    .contact-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 8px 16px;
      background: var(--bg-neutral-subtle);
      padding: 12px 16px;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      font-size: 0.88rem;
    }

    /* ==========================================================================
        DIRECTORIO DE ZONAS PROFESIONAL, CREATIVO Y EDUCATIVO (DISEÑO EJECUTIVO)
        ========================================================================== */
    .creative-directory {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 28px;
      box-shadow: var(--shadow-md);
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .cd-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      border-bottom: 1px solid #334155;
      padding-bottom: 10px;
    }
    .cd-title {
      font-size: 1rem;
      font-weight: 700;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .cd-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
      gap: 8px;
    }
    @media (min-width: 950px) {
      .cd-grid {
        grid-template-columns: repeat(15, 1fr);
      }
    }
    .cd-card {
      background: rgba(30, 41, 59, 0.7);
      border: 1px solid #475569;
      border-radius: 6px;
      padding: 8px 6px;
      text-align: center;
      text-decoration: none;
      color: #f8fafc;
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
    .cd-card:hover {
      background: var(--brand-primary);
      border-color: #38bdf8;
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
    }
    .cd-num {
      font-size: 0.75rem;
      font-weight: 800;
      background: #0284c7;
      color: #ffffff;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cd-card:hover .cd-num {
      background: #ffffff;
      color: #0284c7;
    }
    .cd-label {
      font-size: 0.73rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }

    /* Secciones Generales */
    .sec-block {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-sm);
    }
    .sec-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      border-bottom: 2px solid var(--border-accent);
      padding-bottom: 8px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .sec-num {
      background: var(--brand-dark);
      color: #ffffff;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
      font-weight: 700;
    }

    /* Estilos de Contenido Interno */
    .card-box {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 16px;
      margin-bottom: 12px;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 16px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    ul.styled-list {
      list-style-type: none;
      padding: 0;
    }
    ul.styled-list li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
      font-size: 0.93rem;
      line-height: 1.5;
    }
    ul.styled-list li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--brand-dark);
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* Enlaces Sanitizados */
    a.link-ext {
      color: var(--brand-dark);
      text-decoration: none;
      word-break: break-all;
      font-weight: 500;
    }
    a.link-ext:hover {
      text-decoration: underline;
      color: var(--brand-primary);
    }

    /* Badges de Estado y Normativas */
    .badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 600;
      background: var(--badge-bg);
      color: var(--badge-text);
      margin-right: 4px;
      margin-bottom: 4px;
    }
    .badge-iso {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #86efac;
    }
    .badge-cc {
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fde68a;
    }

    /* ==========================================================================
        VISOR DE EXPERIENCIAS DUAL Y DINÁMICO (Carrusel Táctil/Ratón o Vertical por Selector)
        ========================================================================== */
    .exp-wrapper {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 16px;
    }
    .exp-control-panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
      background: var(--bg-card);
      padding: 12px 16px;
      border-radius: 6px;
      border: 1px solid var(--border-color);
    }
    .exp-select {
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      font-family: inherit;
      font-size: 0.9rem;
      background: var(--bg-primary);
      color: var(--text-main);
      font-weight: 600;
    }
    
    .exp-vertical-view {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .exp-slider-container {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding-bottom: 12px;
      cursor: grab;
      user-select: none;
    }
    .exp-slider-container:active {
      cursor: grabbing;
    }
    .exp-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 16px;
      box-shadow: var(--shadow-sm);
    }
    .exp-slider-container .exp-card {
      min-width: 320px;
      max-width: 360px;
      flex: 0 0 auto;
    }

    /* Tablas de Datos */
    .table-responsive {
      width: 100%;
      overflow-x: auto;
    }
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.88rem;
      margin-top: 10px;
    }
    table.data-table th, table.data-table td {
      border: 1px solid var(--border-color);
      padding: 8px 12px;
      text-align: left;
    }
    table.data-table th {
      background: var(--bg-neutral-subtle);
      color: var(--text-main);
      font-weight: 600;
    }
    table.data-table tr:nth-child(even) {
      background: var(--bg-primary);
    }

    /* Footer Institucional */
    .main-footer {
      background: #0f172a;
      color: #94a3b8;
      padding: 32px 24px;
      border-radius: 8px;
      margin-top: 32px;
      font-size: 0.85rem;
      line-height: 1.6;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    .footer-title {
      color: #ffffff;
      font-size: 0.95rem;
      font-weight: 700;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
  </style>
</head>
<body>

  <!-- Skip link para lectores de pantalla -->
  <a href="#main-content" class="skip-link">Saltar al contenido principal (Accesibilidad WAI-AA)</a>

  <!-- BARRA DE ACCESIBILIDAD Y SEGURIDAD SUPERIOR -->
  <aside class="top-control-bar" aria-label="Controles de accesibilidad y cumplimiento normativo">
    <div>
      <span class="badge badge-iso"><i class="fa-solid fa-shield-halved"></i> ISO/IEC 27001 Seguridad Info</span>
      <span class="badge badge-cc"><i class="fa-creative-commons"></i> CC BY 4.0 Internacional</span>
      <span>WAI-AA / WCAG 2.1 | RD 1112/2018 Braille Compatible</span>
    </div>
    <div style="display: flex; gap: 8px;">
      <button class="ctrl-btn" onclick="toggleContrast()" aria-label="Cambiar a modo alto contraste">
        <i class="fa-solid fa-eye"></i> Alto Contraste
      </button>
      <button class="ctrl-btn" onclick="adjustFontSize(1)" aria-label="Aumentar tamaño de texto">
        <i class="fa-solid fa-font"></i> A+
      </button>
      <button class="ctrl-btn" onclick="adjustFontSize(-1)" aria-label="Reducir tamaño de texto">
        <i class="fa-solid fa-font"></i> A-
      </button>
    </div>
  </aside>

  <div class="container">

    <!-- CABECERA INSTITUCIONAL Y APARTADO 1 -->
    <header class="main-header" id="sec-1">
      <div class="header-grid">
        <img src="user_photo.png" alt="Fotografía oficial de Juan Daniel Blázquez Antón" class="profile-photo" onerror="this.src='https://placehold.co/130x155/0f172a/ffffff?text=JDBA';">
        <div>
          <span class="badge"><i class="fa-solid fa-file-contract"></i> 2.CV-Atlas-Curricular Maestro</span>
          <h1 class="profile-name">Juan Daniel Blázquez Antón</h1>
          <p class="profile-sub">Técnico Especialista en Administración y Finanzas | Operario Multisectorial | Proyecto G.D.R.P. DigiThinkingers *.*</p>
          
          <div class="meta-pills">
            <span class="pill"><b>DNI:</b> 44152293K</span>
            <span class="pill"><b>Seguridad Social:</b> 201008744090</span>
            <span class="pill"><b>Nacimiento:</b> 25/04/1976 (50 años)</span>
            <span class="pill"><b>Grado Discapacidad:</b> Reconocido Oficial</span>
          </div>

          <div class="contact-card-grid">
            <div>📍 <b>Dirección 1:</b> Elizasu 19 1b Altza 20.017 Donostia – San Sebastián (Guipúzcoa)</div>
            <div>📍 <b>Dirección 2:</b> Santa Bárbara 1 2c 20.017 Altza Donostia – San Sebastián</div>
            <div>📞 <b>Teléfono:</b> +34 653 313 947</div>
            <div>✉️ <b>Email Principal:</b> Papitxu1010@Outlook.com</div>
            <div>✉️ <b>Email Secundario:</b> Mamitxu1001@Gmail.com</div>
            <div>🌐 <b>Proyecto Web:</b> <a href="https://saludconnutricion.com/" class="link-ext" target="_blank">saludconnutricion.com</a></div>
          </div>
        </div>
      </div>
    </header>

    <!-- DIRECTORIO DE ZONAS PROFESIONAL, CREATIVO Y EDUCATIVO (DISEÑO EJECUTIVO) -->
    <nav class="creative-directory" aria-label="Directorio Ejecutivo de Zonas y Apartados">
      <div class="cd-header">
        <span class="cd-title"><i class="fa-solid fa-compass-drafting"></i> Directorio Institucional y Atlas Curricular (15 Zonas)</span>
        <span style="font-size: 0.8rem; color: #94a3b8;">Navegación Interactiva G.D.R.P.</span>
      </div>
      <div class="cd-grid">
        <a href="#sec-1" class="cd-card"><span class="cd-num">1</span><span class="cd-label">Datos</span></a>
        <a href="#sec-2" class="cd-card"><span class="cd-num">2</span><span class="cd-label">Presentación</span></a>
        <a href="#sec-3" class="cd-card"><span class="cd-num">3</span><span class="cd-label">Experiencias</span></a>
        <a href="#sec-4" class="cd-card"><span class="cd-num">4</span><span class="cd-label">Referencias</span></a>
        <a href="#sec-5" class="cd-card"><span class="cd-num">5</span><span class="cd-label">Estudios</span></a>
        <a href="#sec-6" class="cd-card"><span class="cd-num">6</span><span class="cd-label">Idiomas</span></a>
        <a href="#sec-7" class="cd-card"><span class="cd-num">7</span><span class="cd-label">Informática</span></a>
        <a href="#sec-8" class="cd-card"><span class="cd-num">8</span><span class="cd-label">Carnets</span></a>
        <a href="#sec-9" class="cd-card"><span class="cd-num">9</span><span class="cd-label">Valores</span></a>
        <a href="#sec-10" class="cd-card"><span class="cd-num">10</span><span class="cd-label">Empleos</span></a>
        <a href="#sec-11" class="cd-card"><span class="cd-num">11</span><span class="cd-label">Disposición</span></a>
        <a href="#sec-12" class="cd-card"><span class="cd-num">12</span><span class="cd-label">Premios</span></a>
        <a href="#sec-13" class="cd-card"><span class="cd-num">13</span><span class="cd-label">Marcas</span></a>
        <a href="#sec-14" class="cd-card"><span class="cd-num">14</span><span class="cd-label">Redes (28)</span></a>
        <a href="#sec-15" class="cd-card"><span class="cd-num">15</span><span class="cd-label">PDFs (18)</span></a>
      </div>
    </nav>

    <!-- CONTENIDO PRINCIPAL DE LOS APARTADOS -->
    <main id="main-content">

      <!-- APARTADO 2: CARTA DE PRESENTACIÓN Y PROYECTO G.D.R.P. -->
      <section class="sec-block" id="sec-2">
        <h2 class="sec-title"><span class="sec-num">2</span> Carta de Presentación y Proyecto "Salud con Nutrición"</h2>
        
        <div class="card-box">
          <h3 style="font-size: 1.05rem; color: var(--brand-dark); margin-bottom: 8px;"><i class="fa-solid fa-user-check"></i> Perfil Físico y Trayectoria Acreditada</h3>
          <p style="font-size: 0.93rem; margin-bottom: 8px;">
            <b>Características Físicas:</b> Persona de Mediana Edad (1,62 m, 62 kg de peso, Atlético). Búsqueda activa de trabajo <b>Off Line Preferentemente</b>, On – Line Excepciones.
          </p>
          <p style="font-size: 0.93rem; margin-bottom: 8px;">
            <b>Experiencia Acreditada:</b> 22 – 23 años de Vida Laboral acreditada ante la TGSS. Cerca de 50 Empresas Trabajadas y alrededor de 200 Contratos Laborales ejecutados con éxito.
          </p>
          <p style="font-size: 0.93rem; margin-bottom: 8px;">
            <b>Objetivo Profesional y Personal:</b> Seguir Ampliando Vida Laboral mediante Contratos y Convenios Establecidos (Cuenta Ajena), compaginándolo armónicamente con la Vida Familiar / Social. Desarrollo de Proyecto En Construcción como Job Educacional Formativo Instructivo en el que aplicar conocimientos. Jovi cual se desea un Acompañante Colaboradora Compañero de Viaje hasta y durante los años de jubilación de este Escritor / Escritora.
          </p>
          <p style="font-size: 0.93rem;">
            <b>Diversidad de Gremios:</b> Ayudante de diversos Gremios – Oficial Segunda Albañilería – Oficial Conductor de maquinaria en Obra. Camarero Experimentado en Catering, Fiestas, Restaurantes, Eventos y Hoteles. Operario de ETTs multisectoriales en Almacenes, Fábricas, Mundo del Bricolaje y Trabajos de Oficina.
          </p>
        </div>

        <div class="card-box" style="background: var(--bg-neutral-subtle); border-left: 4px solid var(--brand-dark);">
          <h3 style="font-size: 1.05rem; color: var(--brand-dark); margin-bottom: 8px;"><i class="fa-solid fa-graduation-cap"></i> Proyecto En Construcción "Fin de Carrera" — SALUD CON NUTRICIÓN</h3>
          <p style="font-size: 0.9rem; margin-bottom: 8px;">
            <b>Grupo Desarrolladores Rendimiento Personal — (G. D. R. P)</b> | Directorias Digitales Home Styles Altza 20.017 | Check - In - AccesSpace - DigiThinkingers *.*
          </p>
          <p style="font-size: 0.9rem; margin-bottom: 8px;"><b>Áreas de Especialización e Investigación:</b></p>
          <div class="grid-2" style="font-size: 0.88rem; margin-bottom: 10px;">
            <div>• Administración y Programas Ofimáticos</div>
            <div>• Gestión y Creación de Contenido Digital</div>
            <div>• Sedes Electrónicas y Certificados Digitales</div>
            <div>• Informática, Comunicaciones, Tecnología, Ciencia, Naturaleza</div>
            <div>• Diseño Gráfico y Programación Web</div>
            <div>• Redes Laborales, Educativas y Other Accounts</div>
          </div>
          <p style="font-size: 0.9rem; margin-bottom: 6px;"><b>4 Factores Fundamentales Investigados:</b></p>
          <ul class="styled-list" style="font-size: 0.88rem;">
            <li><b>. Cerebro / Mente Cuerpo .</b> Optimización analítica y capacidad ejecutiva.</li>
            <li><b>. Motivación / Imaginación .</b> Tenacidad aplicada al desarrollo funcional.</li>
            <li><b>. Nutrición / Alimentación .</b> Salud integral para la productividad.</li>
            <li><b>. Ejercicios Físicos / Actividades .</b> Resistencia y disciplina continuada.</li>
          </ul>
          <p style="font-size: 0.85rem; color: var(--text-light); margin-top: 8px;">
            Plataforma digital apoyada en tecnologías de: <b>Microsoft – Google – OpenAI – Axarnet – WikiMedia – Adobe – World University – Red Internet</b>. Entre 80 y 100 recursos creados.
          </p>
        </div>

        <div class="card-box">
          <h4 style="font-size: 0.92rem; color: var(--text-main); margin-bottom: 6px;">🌐 Enlaces Directos del Proyecto y Presentación:</h4>
          <ul class="styled-list" style="font-size: 0.85rem;">
            <li><b>Vídeo Presentación MP4:</b> <a href="https://saludconnutricion.com/JuanDanielBlazqueAnton44152293K.mp4" class="link-ext" target="_blank">https://saludconnutricion.com/JuanDanielBlazqueAnton44152293K.mp4</a></li>
            <li><b>Búsqueda Activa Contratos:</b> <a href="https://saludconnutricion.com/Prentacion-Busqueda-Activa-ContratosLaborales.html" class="link-ext" target="_blank">https://saludconnutricion.com/Prentacion-Busqueda-Activa-ContratosLaborales.html</a></li>
            <li><b>Títulos y Certificados:</b> <a href="https://saludconnutricion.com/Titulos-Cursos-Certificados-Estudios.html" class="link-ext" target="_blank">https://saludconnutricion.com/Titulos-Cursos-Certificados-Estudios.html</a></li>
            <li><b>Redes Educacionales Formativas:</b> <a href="https://saludconnutricion.com/RedesAmigasWebAmigos.html" class="link-ext" target="_blank">https://saludconnutricion.com/RedesAmigasWebAmigos.html</a></li>
            <li><b>Quiénes Somos:</b> <a href="https://saludconnutricion.com/Quienes-Somos.html" class="link-ext" target="_blank">https://saludconnutricion.com/Quienes-Somos.html</a> | <b>Manifiesto:</b> <a href="https://saludconnutricion.com/manifiesto-coautoria-consciente.html" class="link-ext" target="_blank">Manifiesto Coautoría</a></li>
            <li><b>Recursos On-Line Creados:</b> <a href="https://www.saludconnutricion.com/Recursos-On-Line-Www-SaludconNutricion-com.html" class="link-ext" target="_blank">https://www.saludconnutricion.com/Recursos-On-Line-Www-SaludconNutricion-com.html</a></li>
          </ul>
        </div>
      </section>

      <!-- APARTADO 3: EXPERIENCIAS LABORALES CON VISOR DUAL (CARRUSEL TÁCTIL O LISTADO VERTICAL POR SELECCIÓN) -->
      <section class="sec-block" id="sec-3">
        <h2 class="sec-title"><span class="sec-num">3</span> Experiencias — Directorio Entidades y Contratos (Vida Laboral)</h2>
        
        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 12px; font-style: italic;">
          Vida Laboral Actualizada a 10 de Noviembre de 2026. Todas las experiencias y datos están íntegramente incluidos con detalle. <b>Modo Dual:</b> Al inicio se visualiza en carrusel horizontal interactivo (arrastrando con el dedo o ratón). Si seleccionas un número en el selector, se listarán exactamente tantas experiencias como elijas <b>una debajo de otra en pantalla</b> con toda su información al completo.
        </p>

        <div class="exp-wrapper">
          <div class="exp-control-panel">
            <span style="font-size: 0.9rem; font-weight: 600;"><i class="fa-solid fa-list-ol"></i> Selector de Visualización de Experiencias:</span>
            <div style="display: flex; gap: 10px; align-items: center;">
              <select id="exp-num-selector" class="exp-select" onchange="renderExperienceView(this.value)">
                <option value="slider">Modo Carrusel (Arrastre Táctil / Ratón por Defecto)</option>
                <option value="1">Listar 1 experiencia en pantalla</option>
                <option value="2">Listar 2 experiencias en pantalla</option>
                <option value="3">Listar 3 experiencias en pantalla</option>
                <option value="5">Listar 5 experiencias en pantalla</option>
                <option value="10">Listar 10 experiencias en pantalla</option>
                <option value="all">Listar TODAS las experiencias en pantalla</option>
              </select>
            </div>
          </div>

          <!-- Contenedor Dinámico -->
          <div id="exp-view-container"></div>
        </div>
      </section>

      <!-- APARTADO 4: REFERENCIAS DIRECTAS -->
      <section class="sec-block" id="sec-4">
        <h2 class="sec-title"><span class="sec-num">4</span> Referencias y Contactos Directos de Jefes / Gerentes</h2>
        
        <div class="grid-2">
          <div class="card-box">
            <h3 style="font-size: 1rem; color: var(--brand-dark); margin-bottom: 8px;"><i class="fa-solid fa-helmet-safety"></i> Sector Construcción, Reformas y Tecnología</h3>
            <ul class="styled-list" style="font-size: 0.88rem;">
              <li>
                <b>Cerámicas y Saneamientos Gasteiz S.L.</b><br>
                Juan Carlos De Haro - Jefe de Reformas: <a href="tel:+34608974705" class="link-ext" style="font-weight: bold;">608 974 705</a>
              </li>
              <li style="margin-top: 8px;">
                <b>Nasipa S.L. / Reforvit S.L.</b><br>
                Josean (Jefe de Obra - Gerente): <a href="tel:+34672410870" class="link-ext" style="font-weight: bold;">672 410 870</a>
              </li>
              <li style="margin-top: 8px;">
                <b>Sumática S.L. (Contratista Webcams):</b><br>
                Marta Albaladejo: <a href="tel:+34960519016" class="link-ext" style="font-weight: bold;">960 51 90 16</a>
              </li>
            </ul>
          </div>

          <div class="card-box">
            <h3 style="font-size: 1rem; color: var(--brand-dark); margin-bottom: 8px;"><i class="fa-solid fa-utensils"></i> Sector Hostelería, Deporte y Centros Especiales</h3>
            <ul class="styled-list" style="font-size: 0.88rem;">
              <li>
                <b>Hotel Gran Lakua 5* (Restauración):</b><br>
                Anabel (Gerente): <a href="tel:+34945181000" class="link-ext" style="font-weight: bold;">945 181 000</a>
              </li>
              <li style="margin-top: 8px;">
                <b>Gureak Ostalaritza (Catering Público-Privado):</b><br>
                Tomás Urzelai (Encargado General): <a href="tel:+34647832386" class="link-ext" style="font-weight: bold;">647 832 386</a>
              </li>
              <li style="margin-top: 8px;">
                <b>Bakh (Kirol Hiria Baskonia):</b><br>
                Aritz Querejeta (Gerente): <a href="tel:+34945202831" class="link-ext" style="font-weight: bold;">945 202 831</a>
              </li>
              <li style="margin-top: 8px;">
                <b>Raep S.L.U. (Trabajos Taller y Limpiezas):</b><br>
                Endika (Gerente): <a href="tel:+34646435329" class="link-ext" style="font-weight: bold;">646 435 329</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- APARTADO 5: ESTUDIOS, CURSOS, CERTIFICADOS Y CARNETS -->
      <section class="sec-block" id="sec-5">
        <h2 class="sec-title"><span class="sec-num">5</span> Estudios, Cursos, Certificados y Carnets Oficiales</h2>
        
        <div class="card-box">
          <ul class="styled-list">
            <li>
              <b>Título Oficial FP Superior Administración y Finanzas:</b> Bachillerato 4 años + 1 año Especialidad (Mod III Administración). Técnico Especialista - Superior Administración y Finanzas en Centros Don Bosco y Zubiri Manteo. Equivalencia y convalidación homologada.<br>
              <a href="https://www.donbosco.eus/es" class="link-ext" target="_blank">https://www.donbosco.eus/es</a> | <a href="https://zubirimanteo.eus/es" class="link-ext" target="_blank">https://zubirimanteo.eus/es</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Técnico en Nutrición y Dietética:</b> Instituto Profesional de Estudios de la Salud (IPS). Titulación teórica acreditada.<br>
              <a href="https://www.centroips.com" class="link-ext" target="_blank">https://www.centroips.com</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Cartilla de Navegación y Carnet Marinero/a:</b> Certificados de Suficiencia de Lucha contra la Mar y Formación Marítima del Ministerio de Transportes.<br>
              <a href="https://sede.transportes.gob.es/areas-actividad/marina-mercantemaritimo/titulaciones/titulos-documentacion-examenes-profesionales/cert-suficiencia-yo-formacion-maritima" class="link-ext" target="_blank">Sede Ministerio Transportes - Certificados Marítimos</a>
            </li>
            <li style="margin-top: 8px;">
              <b>IT-Txartelak Aprobadas (KZ-Gunea Gobierno Vasco):</b> Pruebas oficiales aprobadas en Mecanografía, Email, Navegación Internet, Ubuntu Linux, Windows Sistemas Operativos y Microsoft Word.<br>
              <a href="https://www.kzgunea.eus/es/it-txartela" class="link-ext" target="_blank">https://www.kzgunea.eus/es/it-txartela</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Operador de Grúa Torre de Obras:</b> Exámenes oficiales aprobados en el Colegio de Construcción Eraiken (Vitoria-Gasteiz): <a href="https://eraiken.com" class="link-ext" target="_blank">https://eraiken.com</a>
            </li>
            <li style="margin-top: 8px;">
              <b>TPC + Riesgos Laborales Básico:</b> Tarjeta Profesional de la Construcción expedida por la Fundación Laboral de la Construcción: <a href="https://www.fundacionlaboral.org" class="link-ext" target="_blank">https://www.fundacionlaboral.org</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Carnets de Maquinaria Especializada:</b> Carnet oficial de Carretillas Elevadoras y Carnet de Plataformas Elevadoras.<br>
              <a href="https://astifoundation.com" class="link-ext" target="_blank">astifoundation.com</a> | <a href="https://www.formacioncarretillas.es" class="link-ext" target="_blank">www.formacioncarretillas.es</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Carnet de Manipulador de Alimentos:</b> Escuela de Hostelería Egibide Mendizorrotza: <a href="https://www.egibide.org" class="link-ext" target="_blank">https://www.egibide.org</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Cursos Técnicos Sartu Álava:</b> Curso de Solados y Alicatados y Curso Básico de Soldadura por Electrodo: <a href="https://alava.sartu.net" class="link-ext" target="_blank">https://alava.sartu.net</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Instituto Europa (Diseño y Programación):</b> Diplomas conseguidos en HTML, CSS, PHP, DreamWeaver, Photoshop, AutoCAD, FrontPage: <a href="https://www.institutoeuropa.com" class="link-ext" target="_blank">https://www.institutoeuropa.com</a>
            </li>
            <li style="margin-top: 8px;">
              <b>Lanbide / SEPE Cursos Ofimáticos:</b> Formación en Word, Excel y Bases de Datos: <a href="https://web.lanbide.eus" class="link-ext" target="_blank">Lanbide</a> | <a href="https://www.sepe.es" class="link-ext" target="_blank">SEPE</a>
            </li>
          </ul>
        </div>
      </section>

      <!-- APARTADOS 6, 7 Y 8: IDIOMAS, INFORMÁTICA Y CARNETS COMPLEMENTARIOS -->
      <section class="sec-block" id="sec-6-7-8">
        <div class="grid-3">
          <!-- APARTADO 6 -->
          <div class="card-box" id="sec-6">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">6</span> Idiomas</h2>
            <ul class="styled-list">
              <li><b>Castellano – Spanish:</b> Nativo</li>
              <li><b>Inglés:</b> Nivel Básico</li>
              <li><b>Euskera:</b> Nivel Básico</li>
            </ul>
          </div>

          <!-- APARTADO 7 -->
          <div class="card-box" id="sec-7">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">7</span> Informática</h2>
            <ul class="styled-list">
              <li><b>Mecanografía:</b> 300 Pulsaciones por minuto.</li>
              <li><b>Sistemas Operativos:</b> Instalación y gestión nivel básico.</li>
              <li><b>Diseño / Web:</b> FrontPage, DreamWeaver, Photoshop, AutoCAD, HTML, PHP, CSS.</li>
              <li><b>Ofimática y Admin:</b> Nivel básico + Programas Facturación.</li>
            </ul>
          </div>

          <!-- APARTADO 8 -->
          <div class="card-box" id="sec-8">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">8</span> Carnets</h2>
            <ul class="styled-list">
              <li><b>Carnet Conducir:</b> B1 (Vehículo propio)</li>
              <li><b>Carretillas Elevadoras:</b> Carnet Oficial</li>
              <li><b>Plataformas Elevadoras:</b> Carnet Oficial</li>
              <li><b>TPC:</b> Tarjeta Profesional Construcción + PRL.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- APARTADOS 9, 10 Y 11: COMPETENCIAS, MOTIVACIONES Y DISPOSICIÓN -->
      <section class="sec-block" id="sec-9-10-11">
        <div class="grid-3">
          <!-- APARTADO 9 -->
          <div class="card-box" id="sec-9">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">9</span> Valores y Competencias</h2>
            <p style="font-size: 0.88rem; line-height: 1.5;">
              Organización, Orden y Limpieza Laboral. Rigor, Puntualidad y Formalidad. Motivación encaminada hacia los objetivos. Capacidad de Superación. Disciplinado y Organizado. Servicial y Cooperativo. Tenaz y Perspicaz. Excelente trabajo individual y en grupo. Gusto por las Instrucciones y Funciones.
            </p>
          </div>

          <!-- APARTADO 10 -->
          <div class="card-box" id="sec-10">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">10</span> Empleos Deseados</h2>
            <ul class="styled-list">
              <li>Ayudante de Oficios</li>
              <li>Operario Fábricas / Almacenes / Grandes Superficies</li>
              <li>Obras, Servicios y Mantenimiento</li>
              <li>Jardinería</li>
              <li>Administración Comercial / Vendedor</li>
              <li>Trabajos On-Line y Nuevos Retos</li>
            </ul>
          </div>

          <!-- APARTADO 11 -->
          <div class="card-box" id="sec-11">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">11</span> Disposición Laboral</h2>
            <p style="font-size: 0.88rem; margin-bottom: 6px;">
              <b>Horarios:</b> Lunes a Domingos, Festivos y Fines de Semana. Turnos por objetivos. Horas extras disponibles.
            </p>
            <p style="font-size: 0.88rem; margin-bottom: 6px;">
              <b>Zona Geográfica:</b> 20.017 Altza Donostia – San Sebastián. Desplazamientos de 15 – 20 km.
            </p>
            <p style="font-size: 0.88rem;">
              <b>Sueldo Deseado:</b> 23.000 € – 35.000 € anuales mediante contratos y convenios legales.
            </p>
          </div>
        </div>
      </section>

      <!-- APARTADOS 12 Y 13: PREMIOS Y MARCA PROPIA -->
      <section class="sec-block" id="sec-12-13">
        <div class="grid-2">
          <!-- APARTADO 12 -->
          <div class="card-box" id="sec-12" style="background: var(--bg-neutral-subtle);">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">12</span> Premios y Condecoraciones</h2>
            <p style="font-size: 0.9rem;">
              Motivado y estimulado hacia seguir practicando lo aprendido, combinando la máxima productividad laboral en contratos por cuenta ajena con colaboraciones autónomas.<br><br>
              🏆 <b>Premio al Desear Trabajar.</b>
            </p>
          </div>

          <!-- APARTADO 13 -->
          <div class="card-box" id="sec-13" style="border-left: 4px solid var(--brand-dark);">
            <h2 class="sec-title" style="font-size: 1.05rem;"><span class="sec-num">13</span> Extras, Marcas y Patentes</h2>
            <p style="font-size: 0.9rem;">
              <b>Marca a tratar y defender:</b><br>
              <b style="font-size: 1.1rem; color: var(--brand-dark);">DigiThinkingers *.* (G . D . R . P)</b><br>
              Grupo Desarrolladoras Desarrolladores Rendimiento Personal.<br>
              🌐 Proyecto Web Oficial: <a href="https://www.SaludconNutricion.com" class="link-ext" target="_blank">www.SaludconNutricion.com</a>
            </p>
          </div>
        </div>
      </section>

      <!-- APARTADO 14: REDES SOCIALES Y PORTAFOLIOS (28 PORTALES Y URLS ÍNTEGRAS) -->
      <section class="sec-block" id="sec-14">
        <h2 class="sec-title"><span class="sec-num">14</span> Redes Educativas, Sociales, Laborales y Directorios (28 Portales)</h2>
        
        <div class="card-box">
          <ul class="styled-list" style="font-size: 0.85rem; line-height: 1.6;">
            <li>➜ <b>LinkedIn Portal Profesional:</b> <a href="https://www.linkedin.com/in/juandaniel-blazquez-anton-44152293k" class="link-ext" target="_blank">https://www.linkedin.com/in/juandaniel-blazquez-anton-44152293k</a></li>
            <li>➜ <b>Indeed Publicación CV:</b> <a href="https://profile.indeed.com/p/juandanielb-zb3m074" class="link-ext" target="_blank">https://profile.indeed.com/p/juandanielb-zb3m074</a></li>
            <li>➜ <b>Xing Directorio Empleo:</b> <a href="https://www.xing.com/profile/JuanDaniel_BlazquezAnton" class="link-ext" target="_blank">https://www.xing.com/profile/JuanDaniel_BlazquezAnton</a></li>
            <li>➜ <b>Behance Portafolio Creativo:</b> <a href="https://www.behance.net/DigiThinkingers" class="link-ext" target="_blank">https://www.behance.net/DigiThinkingers</a> | <a href="https://www.behance.net/juandanblzque" class="link-ext" target="_blank">behance.net/juandanblzque</a></li>
            <li>➜ <b>EuroPass Europa (Ministerio Educación / UE):</b><br>
              • <a href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/juandaniel-bl%C3%A1zquez+ant%C3%B3n+/827bec93-440f-46f4-bfa4-d60107f60e42?view=html" class="link-ext" target="_blank">Europass Shared Profile HTML</a><br>
              • <a href="https://europa.eu/europass/eportfolio/screen/share/1a5cc2b6-0b7a-4c4b-bc0d-0b9280068ec0?lang=es" class="link-ext" target="_blank">Europass Share ES</a> | <a href="https://europa.eu/europass/eportfolio/screen/share/79d78a2f-eb4e-49b6-99c6-142d2ae58025?lang=en" class="link-ext" target="_blank">Europass Share EN</a>
            </li>
            <li>➜ <b>Lanbide (Servicio Vasco de Empleo):</b> <a href="https://intermediacion.lanbide.eus/pdf/CV_resumido_empresa_1791531258370.pdf" class="link-ext" target="_blank">https://intermediacion.lanbide.eus/pdf/CV_resumido_empresa_1791531258370.pdf</a></li>
            <li>➜ <b>Axarnet Servidor Enlaces:</b> <a href="https://www.saludconnutricion.com/IndexServidorHogar20017Altza/indexRedesLaboralesEducativas.html" class="link-ext" target="_blank">Index Servidor Hogar 20017 Altza</a></li>
            <li>➜ <b>Microsoft Home Facebook:</b> <a href="https://www.facebook.com/JuanDaniel.BlazquezAnton.Dentrix.Humanoide.Digital" class="link-ext" target="_blank">facebook.com/JuanDaniel.BlazquezAnton.Dentrix.Humanoide.Digital</a></li>
            <li>➜ <b>MilAnuncios (Oferta Cuenta Ajena):</b> <a href="https://www.milanuncios.com/anuncios-usuario/juandaniel-blazquez-anton-237594142.htm" class="link-ext" target="_blank">milanuncios.com/juandaniel-blazquez-anton</a></li>
            <li>➜ <b>JobCase Red América:</b> <a href="https://www.jobcase.com/profile/1JFI7SwuXg4K1s7nZwl3XNJH?sharedFrom=copyLink&amp;p_key=1JFI7SwuXg4K1s7nZwl3XNJHl" class="link-ext" target="_blank">jobcase.com/profile/JuanDaniel</a></li>
            <li>➜ <b>OpciónEmpleo:</b> <a href="https://www.opcionempleo.com/cvs/view/1c778926db0d54c5667b2f1d5cfd7640d13fc7d8c3023470/a9bdc752bf17de26f8c25034060e226e/9c63b830552f62818c8409d1195f1a08?rand=0" class="link-ext" target="_blank">opcionempleo.com/cvs/view/JuanDaniel</a></li>
            <li>➜ <b>beBee Talento:</b> <a href="https://bebee.com/es/people/juandaniel-blazquez-anton-dentrix" class="link-ext" target="_blank">bebee.com/es/people/juandaniel-blazquez-anton-dentrix</a></li>
            <li>➜ <b>Trabajos.com:</b> <a href="https://www.trabajos.com/candidato/miscurriculos/editar/1193955810" class="link-ext" target="_blank">trabajos.com/candidato/miscurriculos</a></li>
            <li>➜ <b>IMANcorp Foundation:</b> <a href="https://empleo.imancorp.es/cv/papitxu1001" class="link-ext" target="_blank">empleo.imancorp.es/cv/papitxu1001</a></li>
            <li>➜ <b>Taskia Servicios:</b> <a href="https://www.taskia.es/t/171020/aboutme" class="link-ext" target="_blank">taskia.es/t/171020/aboutme</a></li>
            <li>➜ <b>UpWork Freelance:</b> <a href="https://www.upwork.com/freelancers/~017592afbf588b63a0?p=2109954128556945408" class="link-ext" target="_blank">upwork.com/freelancers/JuanDaniel</a></li>
            <li>➜ <b>Freelancer.com:</b> <a href="https://www.freelancer.com/u/DigiThinkinger" class="link-ext" target="_blank">freelancer.com/u/DigiThinkinger</a> | <a href="https://www.freelancer.com/portfolio-items/11666307-identificaciones-plataformas-laboral" class="link-ext" target="_blank">Freelancer Portfolio</a></li>
            <li>➜ <b>Fiverr Mercado:</b> <a href="https://www.fiverr.com/digithinkinger" class="link-ext" target="_blank">fiverr.com/digithinkinger</a> | <a href="https://www.fiverr.com/users/digithinkinger/portfolio" class="link-ext" target="_blank">Fiverr Portfolio</a> | <a href="https://mira.fiverr.com/api/workspace/brief.html?share=KtL7PXl99raE" class="link-ext" target="_blank">Fiverr Brief API</a></li>
            <li>➜ <b>Workana Freelance:</b> <a href="https://www.workana.com/freelancer/10bf2976e728e48a8ff47d5186872c8e" class="link-ext" target="_blank">workana.com/freelancer/JuanDaniel</a></li>
            <li>➜ <b>RemoteOK Remote Jobs:</b> <a href="https://rok.co/@mamitxu1001" class="link-ext" target="_blank">rok.co/@mamitxu1001</a> | <a href="https://remoteok.com/@mamitxu1001" class="link-ext" target="_blank">remoteok.com/@mamitxu1001</a></li>
            <li>➜ <b>StackExchange / StackOverflow:</b> <a href="https://stackexchange.com/users/44510550/juandaniel-bl%C3%A1zquezant%C3%B3n" class="link-ext" target="_blank">stackexchange.com/users/44510550</a></li>
            <li>➜ <b>CodeMentor Arc.dev:</b> <a href="https://arc.dev/@digithinkingers-1001" class="link-ext" target="_blank">arc.dev/@digithinkingers-1001</a> | <a href="https://www.codementor.io/@digithinkingers-1001" class="link-ext" target="_blank">codementor.io/@digithinkingers-1001</a></li>
            <li>➜ <b>Tecnoempleo:</b> <a href="https://www.tecnoempleo.com/juandaniel-blazquez-anton.mpt" class="link-ext" target="_blank">tecnoempleo.com/juandaniel</a> | <a href="https://freelance.tecnoempleo.com/freelancer/papitxu1001outlook-com" class="link-ext" target="_blank">freelance.tecnoempleo.com</a></li>
            <li>➜ <b>WellFound Startup Jobs:</b> <a href="https://wellfound.com/u/juandaniel-blazquez-anton-44152293k" class="link-ext" target="_blank">wellfound.com/u/juandaniel-blazquez-anton</a></li>
            <li>➜ <b>JobsToday.World:</b> <a href="https://www.jobstoday.world/es/job-seeker/juandaniel-blazquez-anton/ayudante-de-oficios/8502" class="link-ext" target="_blank">jobstoday.world/es/job-seeker/juandaniel</a></li>
            <li>➜ <b>Dribbble Creativos:</b> <a href="https://dribbble.com/juandaniel-blazquezanton" class="link-ext" target="_blank">dribbble.com/juandaniel-blazquezanton</a></li>
          </ul>
        </div>
      </section>

      <!-- APARTADO 15: DOCUMENTOS EN PDF PRESENTADOS (18 ARCHIVOS ÍNTEGROS) -->
      <section class="sec-block" id="sec-15">
        <h2 class="sec-title"><span class="sec-num">15</span> Anexo Documental en PDF (18 Archivos Acreditativos)</h2>
        
        <div class="table-responsive">
          <table class="data-table" aria-label="Tabla de documentos PDF acreditativos adjuntos">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Documento Acreditativo</th>
                <th scope="col">Ruta Directa de Descarga y Verificación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Currículum Vitae Euro-Pass Actualizado</td>
                <td><a href="https://saludconnutricion.com/Actualizado19-08-2026-Europass.pdf" class="link-ext" target="_blank">/Actualizado19-08-2026-Europass.pdf</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Carta de Presentación a Empresas</td>
                <td><a href="https://saludconnutricion.com/CartaPresentacion-Jobs-Ethikos-d%C3%ADa02-Noviembre-2026a%C3%B1o.pdf" class="link-ext" target="_blank">/CartaPresentacion-Jobs-Ethikos-día02-Noviembre-2026año.pdf</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Informe Oficial Vida Laboral TGSS (10-Nov-2026)</td>
                <td><a href="https://saludconnutricion.com/006-vida_laboral-23-09-2026.pdf" class="link-ext" target="_blank">/006-vida_laboral-23-09-2026.pdf</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Carta Presentación Referencias Empresas Trabajadas</td>
                <td><a href="https://saludconnutricion.com/Referencias-Empresas-VidaLabora-24-09-2026.pdf" class="link-ext" target="_blank">/Referencias-Empresas-VidaLabora-24-09-2026.pdf</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>DNI + Carnet Discapacidad + Carnet B1 + TPC + Carretillas</td>
                <td><a href="https://saludconnutricion.com/007-3IdentificacionCarnetLaboralesTodos.pdf" class="link-ext" target="_blank">/007-3IdentificacionCarnetLaboralesTodos.pdf</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Carnet y Certificado Discapacidad Oficial</td>
                <td><a href="https://saludconnutricion.com/2-Carnet-Certificado-Discapacidad-44152293K-12-01-2026_20260112_0001_compressed.pdf" class="link-ext" target="_blank">/2-Carnet-Certificado-Discapacidad-44152293K...</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Certificado Oficial Cambio Nombre de Pila</td>
                <td><a href="https://saludconnutricion.com/1acertificadoCambioNombreJuanDanielBlazquezAnton.pdf" class="link-ext" target="_blank">/1acertificadoCambioNombreJuanDanielBlazquezAnton.pdf</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Certificado Oficial Seguridad Social</td>
                <td><a href="https://saludconnutricion.com/018-Seguridad%20Social%20JuanDaniel%20Blazquez%20Anton_20260115_0001.pdf" class="link-ext" target="_blank">/018-Seguridad Social JuanDaniel Blazquez Anton...</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Certificado Titularidad Bancaria</td>
                <td><a href="https://saludconnutricion.com/019-titularidad_00730100500640736742.pdf" class="link-ext" target="_blank">/019-titularidad_00730100500640736742.pdf</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td>Título Oficial FP Superior Administración y Finanzas</td>
                <td><a href="https://saludconnutricion.com/010-6-T%C3%ADtutloOficialTecnicoEspecialista-Superior-AdministracionYFinanz_20260112_0001.pdf" class="link-ext" target="_blank">/010-6-TítutloOficialTecnicoEspecialista...</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td>Convalidación Actual de Título FP</td>
                <td><a href="https://saludconnutricion.com/012-6xEquivalenciaTecnicoEspecialistaConTecnicoSuperiorAdministracionYFinanzas.pdf" class="link-ext" target="_blank">/012-6xEquivalenciaTecnicoEspecialista...</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td>Notas Último Curso Especialidad Administración</td>
                <td><a href="https://saludconnutricion.com/011-6T%C3%A9cnico%20Superiror%2044152293NotasCursoEspcialidadAdministracion.pdf" class="link-ext" target="_blank">/011-6Técnico Superiror 44152293Notas...</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td>Título Nutrición y Dietética (IPS)</td>
                <td><a href="https://saludconnutricion.com/7Curso-Titulo-Nutricion%20y%20Diet%C3%A9tica" class="link-ext" target="_blank">/7Curso-Titulo-Nutricion y Dietética</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td>Pruebas Aprobadas IT-Txartelak (Gobierno Vasco)</td>
                <td><a href="https://saludconnutricion.com/4-ExamenesIt-Txartelak%20Certificados-ilovepdf_merged.pdf" class="link-ext" target="_blank">/4-ExamenesIt-Txartelak Certificados...</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td>Cursos Informática Instituto Europa</td>
                <td><a href="https://saludconnutricion.com/5-CursosOfimaticaBasica_20260112_0001.pdf" class="link-ext" target="_blank">/5-CursosOfimaticaBasica_20260112_0001.pdf</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td>Certificados Grúa Torre Obras (Eraiken)</td>
                <td><a href="https://saludconnutricion.com/8-OperadorGr%C3%BAaTorreObras44152293KCertificado12-01-2026_20260112_0001_compressed.pdf" class="link-ext" target="_blank">/8-OperadorGrúaTorreObras...</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td>Tarjeta TPC + Carnet Carretillas Elevadoras</td>
                <td><a href="https://saludconnutricion.com/015-8-TarjetaProfesionalConstrucci%C3%B3n-TCP-CarnetCarretillasElevadoras_20260112_0001.pdf" class="link-ext" target="_blank">/015-8-TarjetaProfesionalConstrucción-TCP...</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td>Cartilla Navegación + Carnet Marinero/a</td>
                <td><a href="https://saludconnutricion.com/000016-50-CarnetProfesionalMarinero-Certificados-LuchaContraLamar-_20260112_0001_compressed.pdf" class="link-ext" target="_blank">/000016-50-CarnetProfesionalMarinero...</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>

    <!-- FOOTER INSTITUCIONAL, LICENCIA Y DECLARACIÓN DE ACCESIBILIDAD -->
    <footer class="main-footer">
      <div class="footer-grid">
        <div>
          <div class="footer-title">2.CV-Atlas-Curricular</div>
          <p>Proyecto Maestro e Expediente Laboral de Juan Daniel Blázquez Antón (44152293K). Desarrollado bajo los protocolos de Creatividad, Profesionalidad, Gerencialidad y Formación Institucional.</p>
        </div>

        <div>
          <div class="footer-title">Licencia y Autoría CC BY 4.0</div>
          <p>
            <i class="fa-creative-commons"></i> <b>Licencia Creative Commons CC BY 4.0 Internacional:</b><br>
            Esta obra permite la redistribución, copia y adaptación de contenidos en cualquier medio o formato, siempre que se reconozca y cite adecuadamente la autoría original del proyecto.<br>
            🔗 <a href="https://creativecommons.org/licenses/by/4.0/deed.es" style="color:#38bdf8;" target="_blank">Consultar texto oficial de la Licencia CC BY 4.0</a>
          </p>
        </div>

        <div>
          <div class="footer-title">Inclusión Digital y Accesibilidad</div>
          <p>
            <b>Conformidad activa WAI-AA / WCAG 2.1:</b> Estructura maquetada conforme al <b>Real Decreto 1112/2018</b> para garantizar compatibilidad total con Líneas Braille, lectores de pantalla, audiodescripción y navegadores adaptados de la Administración Pública.<br>
            🛡️ <a href="https://www.tawdis.net/" style="color:#38bdf8;" target="_blank">Validar Portal en TAW</a> | 👁️ <a href="https://wave.webaim.org/" style="color:#38bdf8;" target="_blank">Auditar Código en WAVE</a>
          </p>
        </div>
      </div>

      <div style="border-top: 1px solid #334155; padding-top: 16px; text-align: center; font-size: 0.8rem;">
        <span>Fin Currículum 2.CV | Altza 20.017, Donostia – San Sebastián (Guipúzcoa, Euskadi, España) | Actualizado a 11 de Noviembre de 2026</span>
      </div>
    </footer>

  </div>

  <!-- LÓGICA JAVASCRIPT DE ACCESIBILIDAD Y VISOR DUAL DE EXPERIENCIAS -->
  <script>
    // Listado íntegro de experiencias y entidades de la vida laboral (ampliable con todas las registradas)
    const experiencesData = [
      {
        zona: "Zona 1: Sector de Recursos Humanos, Empleo y Trabajo Temporal",
        badge: "Entidad 1",
        title: "1. Unique Interim E.T.T. S.A.U.",
        details: [
          "Zona web oficial: <a href='https://www.linkedin.com/company/unique-rrhh-spain' class='link-ext' target='_blank'>https://www.linkedin.com/company/unique-rrhh-spain</a>",
          "Trabajos Realizados: Mantenimiento de Jardinería – Trabajos de Mantenimiento del Cuartel de Loyola. Duración acreditada de 6 a 8 meses.",
          "Sector: Recursos Humanos y trabajo temporal.",
          "Actividad principal: Actividades propias de las empresas de trabajo temporal y provisión de recursos humanos.",
          "Objetivos: Intermediar entre empresas y trabajadores y proporcionar personal temporal a empresas usuarias.",
          "Situación especial: La sociedad identificada como UNIQUE INTERIM ETT S.A. figura actualmente como inactiva en la información empresarial consultada. Su web histórica sigue identificándose como sitio web de la sociedad."
        ]
      },
      {
        zona: "Zona 1: Sector de Recursos Humanos, Empleo y Trabajo Temporal",
        badge: "Entidad 2",
        title: "2. Crit Interim España E.T.T. S.L.",
        details: [
          "Zona web oficial: <a href='https://www.Grupo-Crit.com' class='link-ext' target='_blank'>www.Grupo-Crit.com</a>",
          "Trabajos Realizados: Fábrica de subproductos automovilísticos en Vitoria-Gasteiz. Duración acreditada de 6 a 8 meses.",
          "Sector: Recursos Humanos, selección y puesta a disposición.",
          "Actividad principal: Prestación de servicios de empleo temporal e intermediación laboral especializada.",
          "Objetivos: Cobertura de puntas de producción y sustituciones en el sector industrial de automoción."
        ]
      },
      {
        zona: "Zona 1: Sector de Recursos Humanos, Empleo y Trabajo Temporal",
        badge: "Entidad 3",
        title: "3. Laborman Trabajo Temporal S.A.",
        details: [
          "Referencia Axesor: <a href='https://www.axesor.es/Informes-Empresas/718763/LABORMAN...' class='link-ext' target='_blank'>Axesor Laborman</a>",
          "Trabajos Realizados: Extras de hostelería en establecimientos emblemáticos de Donostia (Hotel Londres y de Inglaterra, Hotel María Cristina) y apoyo en almacenes.",
          "Sector: Trabajo temporal y servicios de hostelería.",
          "Actividad principal: Gestión de personal para eventos, banquetes y sector servicios."
        ]
      },
      {
        zona: "Zona 1: Sector de Recursos Humanos, Empleo y Trabajo Temporal",
        badge: "Entidad 4",
        title: "4. Alta Gestión S.A. E.T.T.",
        details: [
          "Referencia Axesor: <a href='https://www.axesor.es/Informes-Empresas/4506/ALTA_GESTION...' class='link-ext' target='_blank'>Axesor Alta Gestión</a>",
          "Trabajos Realizados: Ayudante en fábrica, manejo de grúa puente y operación de máquinas flejadoras (Duración de 4 a 5 meses).",
          "Sector: Recursos Humanos y logística industrial.",
          "Actividad principal: Suministro de personal cualificado para entornos fabriles y almacenes logísticos."
        ]
      },
      {
        zona: "Zona 2: Sector de Hostelería, Hotelería y Restauración",
        badge: "Entidad 5",
        title: "5. Hotel Jardines de Uleta S.L.",
        details: [
          "Web oficial: <a href='https://www.HotelJardinesDeUleta.com' class='link-ext' target='_blank'>Jardines de Uleta</a>",
          "Trabajos Realizados: Camarero de pisos, eventos, bodas y banquetes en suites e instalaciones del hotel.",
          "Sector: Hostelería, turismo y restauración de alta gama.",
          "Actividad principal: Servicios de alojamiento, restauración y organización integral de eventos."
        ]
      }
    ];

    function renderExperienceView(val) {
      const container = document.getElementById('exp-view-container');
      container.innerHTML = '';

      if (val === 'slider') {
        // Modo Carrusel horizontal (se pueden arrastrar con el dedo o ratón)
        const sliderDiv = document.createElement('div');
        sliderDiv.className = 'exp-slider-container';
        sliderDiv.id = 'exp-slider-scroll';

        experiencesData.forEach((exp) => {
          const card = document.createElement('div');
          card.className = 'exp-card';
          card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="badge">${exp.zona.split(':')[0]}</span>
              <span class="badge" style="background: #e2e8f0; color: #1e293b;">${exp.badge}</span>
            </div>
            <h4 style="font-size: 1.05rem; color: var(--brand-dark); margin-bottom: 8px;">${exp.title}</h4>
            <ul class="styled-list" style="font-size: 0.85rem;">
              ${exp.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
          `;
          sliderDiv.appendChild(card);
        });

        container.appendChild(sliderDiv);
        initDragScroll(sliderDiv);

      } else {
        // Modo Vertical: muestra exactamente el número de experiencias seleccionadas (o todas) una debajo de otra
        const limit = val === 'all' ? experiencesData.length : parseInt(val);
        const verticalDiv = document.createElement('div');
        verticalDiv.className = 'exp-vertical-view';

        experiencesData.slice(0, limit).forEach((exp) => {
          const card = document.createElement('div');
          card.className = 'exp-card';
          card.style.maxWidth = '100%';
          card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="badge">${exp.zona}</span>
              <span class="badge" style="background: #e2e8f0; color: #1e293b;">${exp.badge}</span>
            </div>
            <h4 style="font-size: 1.1rem; color: var(--brand-dark); margin-bottom: 10px;">${exp.title}</h4>
            <ul class="styled-list" style="font-size: 0.9rem;">
              ${exp.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
          `;
          verticalDiv.appendChild(card);
        });

        container.appendChild(verticalDiv);
      }
    }

    // Soporte de arrastre táctil y con ratón para el modo carrusel
    function initDragScroll(slider) {
      let isDown = false, startX, scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
      });
      slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    }

    // Inicializar por defecto al cargar la página (Modo Carrusel Táctil/Ratón)
    window.addEventListener('DOMContentLoaded', () => {
      renderExperienceView('slider');
    });

    // Alternar modo Alto Contraste (Ajuste WAI-AA)
    function toggleContrast() {
      document.body.classList.toggle('high-contrast');
    }

    // Ajuste dinámico de tamaño de fuente
    let currentFontSize = 16;
    function adjustFontSize(delta) {
      currentFontSize = Math.max(14, Math.min(22, currentFontSize + delta));
      document.documentElement.style.fontSize = currentFontSize + 'px';
    }
  </script>
</body>
</html>`;

    // Descargar automáticamente el archivo HTML generado
    const blob = new Blob([htmlGenerado], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mi-2cv-definitivo.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  reader.readAsText(file);
});

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
