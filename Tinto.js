// Tinto.js (Semana 1) - Receta para preparar un tinto
// Qué hace: muestra, paso a paso, cómo preparar un tinto. Es un algoritmo
//           secuencial: las instrucciones se ejecutan en orden, de arriba a abajo.
// Cómo ejecutarlo: node Tinto.js
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

// Ingredientes (constantes: no cambian durante el programa)
const AGUA_ML = 200;
const CAFE_G = 1.5;

ejecutar(async () => {
  escribir('Preparación de un tinto');
  escribir('Cantidad de agua en mililitros: ', AGUA_ML, ' ml');
  escribir('Cantidad de café: ', CAFE_G, ' g');

  escribir('Paso 1: Agregar ', AGUA_ML, ' ml de agua a una olla');
  escribir('Paso 2: Calentar el agua durante 3 minutos');
  escribir('Esperar hasta que el agua esté muy caliente, cerca del punto de ebullición');
  escribir('Paso 3: Agregar ', CAFE_G, ' g de café instantáneo al agua caliente');
  escribir('Paso 4: Revolver durante 15 segundos');
  escribir('Paso 5: Servir el tinto en una taza');
  escribir('¡El tinto está listo para disfrutar!');
});
