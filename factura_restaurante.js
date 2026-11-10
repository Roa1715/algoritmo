// Algoritmo FacturaRestaurante (con SubProcesos -> funciones)
const { leerNumero, escribir, ejecutar } = require('../io');

async function leerPedido() {
  let totalPedido = 0;
  escribir('Ingrese el precio del plato (0 para terminar):');
  let precio = await leerNumero();
  while (precio !== 0) {
    escribir('Ingrese la cantidad:');
    const cantidad = await leerNumero();
    totalPedido += precio * cantidad;
    escribir('Ingrese el siguiente precio del plato (0 para terminar):');
    precio = await leerNumero();
  }
  return totalPedido;
}

function calcularPorcentaje(base, porcentaje) {
  return (base * porcentaje) / 100;
}

function imprimirFactura(subtotal, impuesto, propina) {
  const totalFinal = subtotal + impuesto + propina;
  escribir('Subtotal: $', subtotal);
  escribir('Impuesto (8%): $', impuesto);
  escribir('Propina (10%): $', propina);
  escribir('TOTAL A PAGAR: $', totalFinal);
}

ejecutar(async () => {
  const subtotal = await leerPedido();
  const impuesto = calcularPorcentaje(subtotal, 8);
  const propina = calcularPorcentaje(subtotal, 10);
  imprimirFactura(subtotal, impuesto, propina);
});
