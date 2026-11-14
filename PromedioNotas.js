// PromedioNotas.js (Semana 1)
// Qué hace: pide 3 notas y muestra su promedio aritmético.
// Fórmula: promedio = (nota1 + nota2 + nota3) / 3
// Conceptos: variables numéricas (con decimales) y operaciones aritméticas.
// Cómo ejecutarlo: node PromedioNotas.js
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
  escribir('Escribe a continuación las 3 notas que necesitas promediar');

  escribir('Nota 1:');
  const nota1 = await leerNumero();
  escribir('Nota 2:');
  const nota2 = await leerNumero();
  escribir('Nota 3:');
  const nota3 = await leerNumero();

  // Si alguna entrada no era un número, el promedio no se puede calcular
  if ([nota1, nota2, nota3].some(Number.isNaN)) {
    escribir('Error: todas las notas deben ser números (ejemplo: 3.5).');
    return;
  }

  const promedio = (nota1 + nota2 + nota3) / 3;
  escribir('Su nota promedio es ', promedio.toFixed(2));
});
