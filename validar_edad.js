// validar_edad.js (Semana 2) - Control de acceso por edad
// Qué hace: valida la edad ingresada y decide si se concede el acceso.
//   - fuera del rango 0-120  -> edad inválida
//   - 18 o más               -> acceso concedido
//   - menos de 18            -> acceso denegado
// Conceptos: validación de entradas y condicionales.
// Cómo ejecutarlo: node validar_edad.js
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

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 120;

ejecutar(async () => {
  escribir('Ingrese su edad:');
  const edad = await leerEntero();

  if (Number.isNaN(edad) || edad < 0 || edad > EDAD_MAXIMA) {
    escribir('Error: Ingrese una edad válida.');
  } else if (edad >= EDAD_MINIMA) {
    escribir('Acceso concedido. Eres mayor de edad.');
  } else {
    escribir('Acceso denegado. Debes ser mayor de ', EDAD_MINIMA, ' años.');
  }
});
