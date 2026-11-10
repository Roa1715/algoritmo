// Algoritmo Piramide
const { leerEntero, escribir, escribirSinSaltar, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('Ingrese la altura de la pirámide:');
  const n = await leerEntero();

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      escribirSinSaltar(' ');
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      escribirSinSaltar('*');
    }
    escribir('');
  }
});
