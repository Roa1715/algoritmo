// anio_bisiesto.js (Semana 2) - ¿Es bisiesto?
// Qué hace: indica si un año es bisiesto.
// Regla del calendario gregoriano:
//   - Es bisiesto si es divisible entre 4 ...
//   - ... excepto los divisibles entre 100, que NO lo son ...
//   - ... salvo los divisibles entre 400, que SÍ lo son.
//   Ejemplos: 2024 sí, 1900 no, 2000 sí.
// Conceptos: condicionales (if / else) y operadores lógicos (&&, ||).
// Cómo ejecutarlo: node anio_bisiesto.js
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

ejecutar(async () => {
  escribir('Ingrese un año:');
  const anio = await leerEntero();

  if (Number.isNaN(anio)) {
    escribir('Error: ingresa un año válido (número entero).');
    return;
  }

  const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;

  if (esBisiesto) {
    escribir('El año ', anio, ' SÍ es bisiesto.');
  } else {
    escribir('El año ', anio, ' NO es bisiesto.');
  }
});
