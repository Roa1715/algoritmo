// Algoritmo ValidarRegistro
const { leerEntero, leerTexto, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('¿Cuántos años tienes?');
  const edad = await leerEntero();
  escribir('¿Aceptas los términos? (S/N)');
  const respuesta = (await leerTexto()).toUpperCase();

  if (edad >= 14 && respuesta === 'S') {
    escribir('Registro exitoso');
  } else {
    escribir('No puedes registrarte');
  }
});
