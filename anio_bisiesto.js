// Algoritmo AnoBisiesto
const { leerEntero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('Ingrese un año:');
  const ano = await leerEntero();

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    escribir('El año ', ano, ' SÍ es bisiesto.');
  } else {
    escribir('El año ', ano, ' NO es bisiesto.');
  }
});
