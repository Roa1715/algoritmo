// Algoritmo ValidarPIN
const { leerEntero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  const pinCorrecto = 1234;
  let intentos = 0;
  let acceso = false;

  while (intentos < 3 && acceso === false) {
    escribir('Ingrese su PIN (Intento ', intentos + 1, ' de 3):');
    const pinIngresado = await leerEntero();

    if (pinIngresado === pinCorrecto) {
      acceso = true;
      escribir('¡PIN correcto! Acceso concedido.');
    } else {
      intentos += 1;
      if (intentos < 3) {
        escribir('PIN incorrecto. Intente nuevamente.');
      }
    }
  }

  if (acceso === false) {
    escribir('Ha superado los 3 intentos. Sistema bloqueado.');
  }
});
