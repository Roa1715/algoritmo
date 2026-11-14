// calificaciones.js (Semana 3) - Estadísticas de 5 notas
// Qué hace: pide la nota de 5 estudiantes (de 1.0 a 5.0) y muestra:
//   - el promedio                          (acumulador)
//   - cuántos aprobaron (nota >= 3.0)      (contador)
//   - la nota más alta y la más baja       (máximo y mínimo)
//   - si alguien perdió                    (bandera booleana)
// Conceptos: ciclo for, acumulador, contador, máximo/mínimo y bandera.
// Cómo ejecutarlo: node calificaciones.js
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

const CANTIDAD_ESTUDIANTES = 5;
const NOTA_MINIMA = 1.0;
const NOTA_MAXIMA = 5.0;
const NOTA_APROBATORIA = 3.0;

ejecutar(async () => {
  let suma = 0;
  let aprobados = 0;
  let alguienPerdio = false;
  let notaAlta = NOTA_MINIMA; // se ajustan con la primera nota
  let notaBaja = NOTA_MAXIMA;

  for (let i = 1; i <= CANTIDAD_ESTUDIANTES; i++) {
    escribir('Ingrese la nota del estudiante ', i, ' (de ', NOTA_MINIMA.toFixed(1), ' a ', NOTA_MAXIMA.toFixed(1), '):');
    let nota = await leerNumero();

    // Repite la pregunta hasta recibir una nota dentro del rango permitido
    while (Number.isNaN(nota) || nota < NOTA_MINIMA || nota > NOTA_MAXIMA) {
      escribir('Nota inválida. Debe estar entre ', NOTA_MINIMA.toFixed(1), ' y ', NOTA_MAXIMA.toFixed(1), ':');
      nota = await leerNumero();
    }

    suma += nota;

    if (nota >= NOTA_APROBATORIA) {
      aprobados += 1;
    } else {
      alguienPerdio = true; // la bandera, una vez activada, no se apaga
    }

    if (nota > notaAlta || i === 1) notaAlta = nota;
    if (nota < notaBaja || i === 1) notaBaja = nota;
  }

  escribir('----------------------------------------');
  escribir('PROMEDIO (Acumulador): ', (suma / CANTIDAD_ESTUDIANTES).toFixed(2));
  escribir('CANTIDAD QUE APROBARON (Contador): ', aprobados);
  escribir('NOTA MÁS ALTA (Máximo): ', notaAlta);
  escribir('NOTA MÁS BAJA (Mínimo): ', notaBaja);
  escribir('¿ALGUIEN PERDIÓ? (Bandera): ', alguienPerdio ? 'Sí' : 'No');
});
