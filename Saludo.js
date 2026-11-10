// Algoritmo sin_titulo (Saludo)
const { leerTexto, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('¿Cual es tu nombre?');
  const nombre = await leerTexto();
  escribir('Hola, ', nombre, ', Bienvenido a Algoritmia!');
});
