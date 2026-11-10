/* ==========================================================================
   SCRIPT.JS - MOTOR DE LÓGICA Y CONEXIÓN 2.Cv
   DigiThinkingers *.* (G.D.R.P) - SaludconNutricion.com
   Funcionalidades: Lógica Condicional Geográfica, Embeds, Marcadores Vídeo,
                  Fórmula Cuestionario Educativo, Almacén GitHub.
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CARGA DE DATOS MAESTROS (datos_cv.json)
// --------------------------------------------------------------------------
let datosMaster = {};

/**
 * Carga el archivo JSON maestro desde el servidor (o local).
 */
async function cargarDatos() {
  try {
    const respuesta = await fetch('datos_cv.json');
    datosMaster = await respuesta.json();
    console.log('✅ datos_cv.json cargado correctamente.');
    // Inicializar el Creador o Visualizador según la página
    inicializar();
  } catch (error) {
    console.error('❌ Error cargando datos_cv.json:', error);
  }
}

// --------------------------------------------------------------------------
// 2. LÓGICA DEL CREADOR (creador.html)
// --------------------------------------------------------------------------

/**
 * Rellena el Cuestionario Educativo con los datos de ejemplo del "Paciente Cero".
 */
function rellenarCuestionario() {
  if (datosMaster.datos_personales) {
    document.getElementById('id-nombre').value = datosMaster.datos_personales.nombre;
    document.getElementById('id-dni').value = datosMaster.datos_personales.dni_nie;
    document.getElementById('id-ubicacion').value = datosMaster.datos_personales.ubicacion;
  }
  
  if (datosMaster.carta_presentación) {
    document.getElementById('carta-pres').value = datosMaster.carta_presentación.valor;
  }
  
  // Rellenar Zonas Modulares de Experiencia
  datosMaster.zonas.forEach(zona => {
    // Lógica artesanal para crear inputs repetibles por Zona
    console.log(`Procesando Zona ${zona.id}: ${zona.nombre}`);
  });
}

/**
 * Limpia el texto de ejemplo cuando el usuario hace focus en una casilla de Color A.
 * Implementa la Fórmula Cuestionario Educativo.
 */
function limpiarEjemplo(inputId) {
  const input = document.getElementById(inputId);
  if (input.classList.contains('input-ejemplo')) {
    input.value = ''; // Limpiar ejemplo
    input.classList.remove('input-ejemplo');
    input.classList.add('input-usuario'); // Cambiar color a Negro Puro
  }
}

// --------------------------------------------------------------------------
// 3. LÓGICA DE INNOVACIÓN Y VERACIDAD
// --------------------------------------------------------------------------

// Propuesta 1: El Nodo de Veracidad Dinámica (Open Data)

/**
 * Muestra opcionalmente la validación dinámica Open Data según el país seleccionado.
 * Lógica Condicional Geográfica.
 */
function mostrarValidacionOpenData() {
  const pais = document.getElementById('id-pais').value;
  const contenedorApi = document.getElementById('contenedor-api-valida');
  
  if (pais === 'España') {
    // Si es España, mostrar opción de API gubernamental (Cl@ve)
    contenedorApi.innerHTML = `
      <div class="api-opcional">
        <label>¿Desea validar sus títulos oficiales en España vía Ministerio de Educación? (Requiere Cl@ve/Certificado Digital)</label>
        <button onclick="validarApiOpenDataEsp()">Validar con Sello Oficial</button>
      </div>
    `;
    contenedorApi.style.display = 'block';
  } else {
    // Si no es España, ocultar o mostrar alternativa de Almacén GitHub
    contenedorApi.innerHTML = `
      <div class="doc-almacen-github">
        <label>Su país no dispone de validación dinámica Open Data. Por favor, suba el PDF de su título a su Almacén personal de GitHub e incluya la URL real:</label>
        <input type="url" placeholder="URL Real Documento GitHub">
      </div>
    `;
    contenedorApi.style.display = 'block';
  }
}

// 4. LÓGICA DE VISUALIZACIÓN (2cv.html)

/**
 * Genera dinámicamente el CV Modular 2.CV basándose en los datos (ejemplo o usuario).
 */
function generarCvModular(datos = datosMaster) {
  const containerCv = document.getElementById('container-2cv-visual');
  
  // Lógica artesanal para generar el DOM dinámico
  containerCv.innerHTML = ''; // Limpiar previo
  
  // Datos Personales
  generarBloqueDatosPersonales(datos.datos_personales);
  
  // Zonas Modulares
  datos.zonas.forEach(zona => {
    generarZonaModular(zona);
  });
  
  // Vídeo-Pitch con Marcadores
  generarVideoPitch(datos.vídeo_pitch);
  
  // Expansión Red (Embeds Verificados)
  generarBloqueRedes(datos.expansión_red);
}

/**
 * Incrusta el Embed de la Red Social para veracidad inmediata.
 */
function generarEmbedRed(red) {
  if (red.embed_disponible) {
    return `<div class="embed-container"><iframe src="${red.url}"></iframe></div>`;
  }
  return `<a href="${red.url}" target="_blank">Ver perfil</a>`;
}

// --------------------------------------------------------------------------
// 5. INICIALIZACIÓN MULTISISTEMA
// --------------------------------------------------------------------------

/**
 * Inicializa la lógica según la página HTML activa.
 */
function inicializar() {
  const pathActual = window.location.pathname;
  
  if (pathActual.includes('creador.html')) {
    // Lógica para el Creador
    rellenarCuestionario();
    // Añadir eventos a inputs de ejemplo
    document.querySelectorAll('.input-ejemplo').forEach(input => {
      input.addEventListener('focus', () => limpiarEjemplo(input.id));
    });
  } else if (pathActual.includes('2cv.html')) {
    // Lógica para el Visualizador
    generarCvModular();
  }
}

// Comenzar la carga de datos
cargarDatos();
