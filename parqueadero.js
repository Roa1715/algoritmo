// parqueadero.js (Semana 2) - Cobro de parqueadero con casos borde
// Qué hace: calcula el cobro según tipo de vehículo, tiempo y factura de compra.
// Reglas:
//   - Los primeros 15 minutos son gratis.
//   - Después se cobra por hora o fracción (61 min = 2 horas).
//   - Carro: $4.000/hora, con tope máximo de $30.000.  Moto: $2.000/hora.
//   - Con factura del centro comercial se aplica 50 % de descuento.
// Casos borde que valida: minutos negativos o no numéricos, tipo de vehículo
//   desconocido y respuestas de factura con o sin tilde ("si" / "sí").
// Conceptos: condicionales anidados, constantes, redondeo hacia arriba.
// Cómo ejecutarlo: node parqueadero.js
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

const TARIFA_HORA_CARRO = 4000;
const TARIFA_HORA_MOTO = 2000;
const TOPE_CARRO = 30000;
const MINUTOS_GRATIS = 15;
const DESCUENTO_FACTURA = 0.5; // 50 %

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

  // 1) Validar las entradas antes de calcular
  if (Number.isNaN(minutos) || minutos < 0) {
    escribir('RESULTADO: Minutos inválidos (deben ser un número mayor o igual a 0).');
    return;
  }
  if (tipoVehiculo !== 'carro' && tipoVehiculo !== 'moto') {
    escribir('RESULTADO: Tipo no válido.');
    return;
  }

  // 2) Calcular el cobro
  let cobroFinal = 0;
  let horasACobrar = 0;

  if (minutos > MINUTOS_GRATIS) {
    horasACobrar = Math.ceil(minutos / 60); // hora o fracción

    let cobroBase;
    if (tipoVehiculo === 'carro') {
      cobroBase = Math.min(horasACobrar * TARIFA_HORA_CARRO, TOPE_CARRO);
    } else {
      cobroBase = horasACobrar * TARIFA_HORA_MOTO;
    }

    const conFactura = tieneFactura === 'si' || tieneFactura === 'sí';
    cobroFinal = conFactura ? cobroBase * (1 - DESCUENTO_FACTURA) : cobroBase;
  }

  escribir('Horas calculadas a cobrar: ', horasACobrar);
  escribir('RESULTADO (Cobro): $', cobroFinal);
});
