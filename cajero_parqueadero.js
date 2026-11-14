// cajero_parqueadero.js (Semana 3) - Caja del parqueadero
// Qué hace: va sumando el valor cobrado a cada carro hasta que se ingresa 0.
//   Al final muestra el total recaudado y la cantidad de carros atendidos.
// Conceptos: ciclo while con "centinela" (el 0 marca el fin), acumulador
//   (total) y contador (carros).
// Cómo ejecutarlo: node cajero_parqueadero.js
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
  let total = 0;  // acumulador: suma de todos los valores
  let carros = 0; // contador: cuántos carros se han registrado

  escribir('Ingrese el valor del parqueadero (0 para terminar):');
  let valor = await leerEntero();

  while (valor !== 0) {
    // Solo se aceptan valores positivos; los demás se ignoran y se vuelve a pedir
    if (Number.isNaN(valor) || valor < 0) {
      escribir('Valor inválido: ingrese un número mayor a 0 (o 0 para terminar).');
    } else {
      total += valor;
      carros += 1;
    }

    escribir('Ingrese el valor del siguiente carro (0 para terminar):');
    valor = await leerEntero();
  }

  escribir('Total recaudado: $', total);
  escribir('Cantidad de carros: ', carros);
});
