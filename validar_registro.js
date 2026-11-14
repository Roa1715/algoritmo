// validar_registro.js (Semana 2) - Validar un registro
// Qué hace: permite el registro solo si se cumplen LAS DOS condiciones:
//   1) la persona tiene 14 años o más, y
//   2) acepta los términos escribiendo "S".
// Conceptos: operador lógico Y (&&) para combinar condiciones.
// Cómo ejecutarlo: node validar_registro.js
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

const EDAD_MINIMA = 14;

ejecutar(async () => {
  escribir('¿Cuántos años tienes?');
  const edad = await leerEntero();
  escribir('¿Aceptas los términos? (S/N)');
  const respuesta = (await leerTexto()).toUpperCase(); // "s" y "S" valen igual

  if (edad >= EDAD_MINIMA && respuesta === 'S') {
    escribir('Registro exitoso');
  } else {
    escribir('No puedes registrarte');
  }
});
