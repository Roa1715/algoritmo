// Algoritmo Semaforo
const { leerEntero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('Ingrese la cantidad de unidades:');
  const unidades = await leerEntero();

  if (unidades < 0) {
    escribir('error');
  } else if (unidades === 0) {
    escribir('rojo: agotado');
  } else if (unidades >= 1 && unidades <= 10) {
    escribir('amarillo: pedir');
  } else {
    escribir('verde: todo bien');
  }
});
