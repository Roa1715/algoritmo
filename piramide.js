// piramide.js (Semana 3) - Pirámide de asteriscos
// Qué hace: dibuja una pirámide centrada de la altura indicada. Ejemplo (n = 3):
//     *
//    ***
//   *****
// Lógica: en la fila i (de 1 a n)
//   - se escriben (n - i) espacios para centrar, y luego
//   - (2 * i - 1) asteriscos.
// Conceptos: ciclos for anidados.
// Cómo ejecutarlo: node piramide.js
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
const escribirSinSaltar = (texto) => process.stdout.write(texto); // sin salto de línea

ejecutar(async () => {
  escribir('Ingrese la altura de la pirámide:');
  const n = await leerEntero();

  if (Number.isNaN(n) || n < 1) {
    escribir('Error: la altura debe ser un número entero mayor o igual a 1.');
    return;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      escribirSinSaltar(' '); // espacios de la izquierda
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      escribirSinSaltar('*'); // asteriscos de la fila
    }
    escribir(''); // salto de línea al terminar la fila
  }
});
