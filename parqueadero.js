// Algoritmo CobroParqueadero_ConCasosBorde
const { leerTexto, leerEntero, escribir, ejecutar } = require('../io');

const TARIFA_HORA_CARRO = 4000;
const TARIFA_HORA_MOTO = 2000;
const TOPE_CARRO = 30000;

ejecutar(async () => {
  escribir('=== SISTEMA DE COBRO DE PARQUEADERO ===');
  escribir('Ingrese el tipo de vehículo (Carro / Moto):');
  const tipoVehiculo = (await leerTexto()).toLowerCase();

  escribir('Ingrese el tiempo de permanencia en minutos:');
  const minutos = await leerEntero();

  escribir('¿Tiene factura de compra en el centro comercial? (Sí / No):');
  const tieneFactura = (await leerTexto()).toLowerCase();

  escribir('--------------------------------------');
  escribir('RESUMEN DE DATOS:');
  escribir('Tipo: ', tipoVehiculo);
  escribir('Tiempo: ', minutos, ' min');
  escribir('Factura: ', tieneFactura);
  escribir('--------------------------------------');

  if (minutos < 0) {
    escribir('RESULTADO: Minutos negativos. Entrada inválida.');
  } else if (tipoVehiculo !== 'carro' && tipoVehiculo !== 'moto') {
    escribir('RESULTADO: Tipo no válido.');
  } else {
    let cobroFinal;
    let horasACobrar;

    if (minutos <= 15) {
      cobroFinal = 0;
      horasACobrar = 0;
    } else {
      horasACobrar = Math.trunc(minutos / 60);
      if (minutos % 60 > 0) {
        horasACobrar += 1;
      }

      let cobroBase;
      if (tipoVehiculo === 'carro') {
        cobroBase = horasACobrar * TARIFA_HORA_CARRO;
        if (cobroBase > TOPE_CARRO) {
          cobroBase = TOPE_CARRO;
        }
      } else {
        cobroBase = horasACobrar * TARIFA_HORA_MOTO;
      }

      if (tieneFactura === 'si' || tieneFactura === 'sí') {
        cobroFinal = cobroBase * 0.5;
      } else {
        cobroFinal = cobroBase;
      }
    }

    escribir('Horas calculadas a cobrar: ', horasACobrar);
    escribir('RESULTADO ESPERADO (Cobro): $', cobroFinal);
  }
});
