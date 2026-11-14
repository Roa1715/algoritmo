// Saludo.js (Semana 1)
// Qué hace: pregunta el nombre del usuario y le da la bienvenida.
// Conceptos: salida (escribir), entrada de texto (leerTexto) y variables.
// Cómo ejecutarlo: node Saludo.js
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
  escribir('¿Cuál es tu nombre?');
  const nombre = await leerTexto(); // se guarda lo que escribe el usuario

  escribir('Hola, ', nombre, ', ¡Bienvenido a Algoritmia!');
});
