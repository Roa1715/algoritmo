// Algoritmo Propinas
const { leerEntero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('Cuanto fue el total de la cuenta');
  const cuenta = await leerEntero();
  const propina = cuenta * 0.1;
  escribir('Cuantas personas comieron?');
  const personas = await leerEntero();
  const cuentaI = cuenta / personas;
  // Nota: el original divide la propina entre 4 fijo (Propina/4), no entre "personas".
  // Se mantiene igual; si querías dividir entre las personas, cambia 4 por personas.
  escribir('Cada uno tiene que pagar ', cuentaI, ' COP, y la propina que cada uno aporta es de ', propina / 4);
});
