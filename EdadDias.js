// Algoritmo Edad_en_días
const { leerEntero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('¿Cual es tu edad?');
  const edad = await leerEntero();
  const dias = edad * 365;
  escribir('Llevas vivo ', dias, ' días aproximadamente');
});
