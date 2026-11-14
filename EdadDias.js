// EdadDias.js (Semana 1)
// Qué hace: calcula aproximadamente cuántos días lleva vivo el usuario.
// Conceptos: entrada de números, operaciones aritméticas, validación básica.
// Nota: se usa 365 días por año, por eso el resultado es aproximado
//       (no cuenta los años bisiestos ni los meses transcurridos).
// Cómo ejecutarlo: node EdadDias.js
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

const DIAS_POR_ANIO = 365;

ejecutar(async () => {
  escribir('¿Cuál es tu edad?');
  const edad = await leerEntero();

  // Validación: la edad debe ser un número y no puede ser negativa
  if (Number.isNaN(edad) || edad < 0) {
    escribir('Error: ingresa una edad válida (un número entero mayor o igual a 0).');
    return;
  }

  const dias = edad * DIAS_POR_ANIO;
  escribir('Llevas vivo ', dias, ' días aproximadamente');
});
