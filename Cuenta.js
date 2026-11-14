// Cuenta.js (Semana 1) - Cuenta dividida con propina
// Qué hace: divide una cuenta entre las personas que comieron y calcula la
//           propina sugerida (10 % de la cuenta) que aporta cada una.
// Fórmulas:  porPersona        = cuenta / personas
//            propina total     = cuenta * 0.10
//            propina por persona = propina total / personas
// Cómo ejecutarlo: node Cuenta.js
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

const PORCENTAJE_PROPINA = 0.1; // 10 %

ejecutar(async () => {
  escribir('¿Cuánto fue el total de la cuenta?');
  const cuenta = await leerNumero(); // puede tener decimales
  escribir('¿Cuántas personas comieron?');
  const personas = await leerEntero();

  // Validaciones: evitan resultados absurdos y la división por cero
  if (Number.isNaN(cuenta) || cuenta < 0) {
    escribir('Error: el total de la cuenta debe ser un número mayor o igual a 0.');
    return;
  }
  if (Number.isNaN(personas) || personas <= 0) {
    escribir('Error: debe haber al menos 1 persona.');
    return;
  }

  const propina = cuenta * PORCENTAJE_PROPINA;
  // Se redondea a pesos enteros (el COP no se usa con decimales)
  const cuentaPorPersona = Math.round(cuenta / personas);
  const propinaPorPersona = Math.round(propina / personas); // entre las personas reales

  escribir('Cada uno tiene que pagar ', cuentaPorPersona, ' COP, y la propina que cada uno aporta es de ', propinaPorPersona, ' COP');
  escribir('Total por persona (cuenta + propina): ', cuentaPorPersona + propinaPorPersona, ' COP');
});
