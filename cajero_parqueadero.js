// Algoritmo CajeroParqueadero
const { leerEntero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  let total = 0;
  let carros = 0;

  escribir('Ingrese el valor del parqueadero (0 para terminar):');
  let valor = await leerEntero();

  while (valor !== 0) {
    total += valor;
    carros += 1;

    escribir('Ingrese el valor del siguiente carro (0 para terminar):');
    valor = await leerEntero();
  }

  escribir('Total recaudado: $', total);
  escribir('Cantidad de carros: ', carros);
});
