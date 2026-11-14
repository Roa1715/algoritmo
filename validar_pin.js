// validar_pin.js (Semana 3) - Validación de PIN con 3 intentos
// Qué hace: pide el PIN hasta 3 veces. Si acierta, concede el acceso; si falla
//   las 3 veces, bloquea el sistema.
// Conceptos: ciclo while con dos condiciones (intentos y bandera "acceso").
// Nota: el PIN está escrito en el código solo con fines de práctica; en un
//   sistema real nunca se guarda así.
// Cómo ejecutarlo: node validar_pin.js   (el PIN de prueba es 1234)
// ---------------------------------------------------------------------------
// Entrada y salida por consola (solo Node.js, no hay que instalar nada).
//   escribir(...)  -> muestra en pantalla todos los argumentos pegados.
//   leerTexto()    -> lee una línea y la devuelve como texto.
//   leerNumero()   -> lee una línea y la devuelve como número (admite decimales).
//   leerEntero()   -> lee una línea y la devuelve como número entero.
//   ejecutar(fn)   -> corre el programa y cierra la lectura al terminar.
// Si el usuario escribe algo que no es un número, leerNumero/leerEntero dan NaN.
// ---------------------------------------------------------------------------
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
const lineas = rl[Symbol.asyncIterator]();
const escribir = (...partes) => console.log(partes.join(''));
const leerTexto = async () => ((await lineas.next()).value ?? '').trim();
const leerNumero = async () => Number(await leerTexto());
const leerEntero = async () => parseInt(await leerTexto(), 10);
const ejecutar = (fn) => fn().finally(() => rl.close());
// ---------------------------------------------------------------------------

const PIN_CORRECTO = 1234;
const MAX_INTENTOS = 3;

ejecutar(async () => {
  let intentos = 0;
  let acceso = false; // bandera: pasa a true cuando el PIN es correcto

  while (intentos < MAX_INTENTOS && !acceso) {
    escribir('Ingrese su PIN (Intento ', intentos + 1, ' de ', MAX_INTENTOS, '):');
    const pinIngresado = await leerEntero();

    if (pinIngresado === PIN_CORRECTO) {
      acceso = true;
      escribir('¡PIN correcto! Acceso concedido.');
    } else {
      intentos += 1; // también cuenta como intento si no es un número
      if (intentos < MAX_INTENTOS) {
        escribir('PIN incorrecto. Intente nuevamente.');
      }
    }
  }

  if (!acceso) {
    escribir('Ha superado los ', MAX_INTENTOS, ' intentos. Sistema bloqueado.');
  }
});
