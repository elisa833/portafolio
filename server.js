require('dotenv').config();
const express = require("express");
const path = require("path");

const aplicacion = express();
const PUERTO = process.env.PORT || 5000;

console.log("--- INICIO DE DEPURACIÓN DEL SERVIDOR ---");
console.log(`[SISTEMA] Directorio raíz (__dirname): ${__dirname}`);
console.log(`[CONFIG] Puerto definido: ${PUERTO}`);

const RUTA_BASE = "/PortafoliKarlaElisa"; 
console.log(`[CONFIG] RUTA_BASE establecida como: ${RUTA_BASE}`);

try {
  const rutaBuild = path.join(__dirname, 'build');
  console.log(`[ESTÁTICOS] Configurando carpeta de archivos estáticos en: ${rutaBuild}`);
  
  aplicacion.use(RUTA_BASE, express.static(rutaBuild));
  console.log(`[ESTÁTICOS] Middleware express.static configurado correctamente para ${RUTA_BASE}`);
} catch (error) {
  console.error("[ERROR CRÍTICO] Falló la configuración de la carpeta estática:", error);
}

aplicacion.get(`${RUTA_BASE}/*`, (peticion, respuesta) => {
  console.log(`[NAVEGACIÓN] Petición GET recibida: ${peticion.url}`);
  
  const rutaIndex = path.join(__dirname, 'build', 'index.html');
  console.log(`[ROUTING] Buscando archivo index.html en: ${rutaIndex}`);
  
  respuesta.sendFile(rutaIndex, (error) => {
    if (error) {
      console.error("[ERROR] No se pudo enviar index.html:", error);
      respuesta.status(500).send(error);
    } else {
      console.log("[ÉXITO] index.html enviado correctamente al cliente.");
    }
  });
});

aplicacion.listen(PUERTO, () => {
  console.log(`[SERVIDOR] Servidor escuchando en el puerto ${PUERTO}`);
  console.log(`[SERVIDOR] Accede a la aplicación mediante el dominio configurado seguido de ${RUTA_BASE}`);
});