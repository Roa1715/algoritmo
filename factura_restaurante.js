// factura_restaurante.js (Semana 3) - Factura de restaurante con funciones
// Qué hace: lee los platos pedidos (precio y cantidad) hasta que se ingresa
//   precio 0, y luego imprime la factura con impuesto (8 %) y propina (10 %).
// Estructura (cada función hace UNA sola cosa):
//   leerPedido()         -> pide los platos y devuelve el subtotal
//   calcularPorcentaje() -> devuelve un porcentaje de un valor base
//   imprimirFactura()    -> muestra subtotal, impuesto, propina y total
// Conceptos: funciones (en pseudocódigo, SubProcesos), parámetros, retorno.
// Cómo ejecutarlo: node factura_restaurante.js
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

const PORCENTAJE_IMPUESTO = 8;
const PORCENTAJE_PROPINA = 10;

// Pide platos hasta que el precio sea 0 y devuelve la suma de precio * cantidad
async function leerPedido() {
  let totalPedido = 0;
  escribir('Ingrese el precio del plato (0 para terminar):');
  let precio = await leerNumero();

  while (precio !== 0) {
    if (Number.isNaN(precio) || precio < 0) {
      escribir('Precio inválido: ingrese un número mayor a 0 (o 0 para terminar).');
    } else {
      escribir('Ingrese la cantidad:');
      const cantidad = await leerNumero();
      if (Number.isNaN(cantidad) || cantidad <= 0) {
        escribir('Cantidad inválida: el plato no se agregó.');
      } else {
        totalPedido += precio * cantidad;
      }
    }
    escribir('Ingrese el siguiente precio del plato (0 para terminar):');
    precio = await leerNumero();
  }
  return totalPedido;
}

// Devuelve el porcentaje indicado de un valor (ej.: 8 % de 50000 = 4000)
function calcularPorcentaje(base, porcentaje) {
  return (base * porcentaje) / 100;
}

// Muestra la factura. Total = subtotal + impuesto + propina
function imprimirFactura(subtotal, impuesto, propina) {
  const totalFinal = subtotal + impuesto + propina;
  escribir('Subtotal: $', subtotal);
  escribir('Impuesto (', PORCENTAJE_IMPUESTO, '%): $', impuesto);
  escribir('Propina (', PORCENTAJE_PROPINA, '%): $', propina);
  escribir('TOTAL A PAGAR: $', totalFinal);
}

ejecutar(async () => {
  const subtotal = await leerPedido();
  const impuesto = calcularPorcentaje(subtotal, PORCENTAJE_IMPUESTO);
  const propina = calcularPorcentaje(subtotal, PORCENTAJE_PROPINA);
  imprimirFactura(subtotal, impuesto, propina);
});
