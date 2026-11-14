// semaforo.js (Semana 2) - Semáforo de inventario
// Qué hace: según las unidades disponibles, muestra un color de alerta.
//   - menos de 0   -> error (cantidad inválida)
//   - 0            -> rojo: agotado
//   - de 1 a 10    -> amarillo: hay que pedir más
//   - más de 10    -> verde: todo bien
// Conceptos: condicionales encadenados (if / else if / else).
// Cómo ejecutarlo: node semaforo.js
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

const LIMITE_AMARILLO = 10; // hasta esta cantidad se considera stock bajo

ejecutar(async () => {
  escribir('Ingrese la cantidad de unidades:');
  const unidades = await leerEntero();

  if (Number.isNaN(unidades) || unidades < 0) {
    escribir('error: la cantidad debe ser un número entero mayor o igual a 0');
  } else if (unidades === 0) {
    escribir('rojo: agotado');
  } else if (unidades <= LIMITE_AMARILLO) {
    escribir('amarillo: pedir');
  } else {
    escribir('verde: todo bien');
  }
});
