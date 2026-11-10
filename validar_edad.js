// Algoritmo ValidarEdad
const { leerEntero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('Ingrese su edad:');
  const edad = await leerEntero();

  if (edad < 0 || edad > 120) {
    escribir('Error: Ingrese una edad válida.');
  } else if (edad >= 18) {
    escribir('Acceso concedido. Eres mayor de edad.');
  } else {
    escribir('Acceso denegado. Debes ser mayor de 18 años.');
  }
});
