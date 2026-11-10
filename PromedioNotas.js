// Algoritmo PromedioNotas
const { leerNumero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('Escribe a continuación las 3 notas que necesitas promediar');
  escribir('Nota1:');
  const nota1 = await leerNumero();
  escribir('Nota2');
  const nota2 = await leerNumero();
  escribir('Nota3');
  const nota3 = await leerNumero();
  escribir('Su nota promedio es ', (nota1 + nota2 + nota3) / 3, ' ');
});
