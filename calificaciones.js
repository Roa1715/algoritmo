// Algoritmo Calificaciones
const { leerNumero, escribir, ejecutar } = require('../io');

ejecutar(async () => {
  let suma = 0;
  let aprobados = 0;
  let alguienPerdio = false;
  let notaAlta, notaBaja;

  for (let i = 1; i <= 5; i++) {
    escribir('Ingrese la nota del estudiante ', i, ' (de 1.0 a 5.0):');
    const nota = await leerNumero();

    suma += nota;

    if (nota >= 3.0) {
      aprobados += 1;
    } else {
      alguienPerdio = true;
    }

    if (i === 1) {
      notaAlta = nota;
      notaBaja = nota;
    } else {
      if (nota > notaAlta) notaAlta = nota;
      if (nota < notaBaja) notaBaja = nota;
    }
  }

  escribir('----------------------------------------');
  escribir('PROMEDIO (Acumulador): ', suma / 5);
  escribir('CANTIDAD QUE APROBARON (Contador): ', aprobados);
  escribir('NOTA MÁS ALTA (Máximo): ', notaAlta);
  escribir('NOTA MÁS BAJA (Mínimo): ', notaBaja);

  if (alguienPerdio) {
    escribir('¿ALGUIEN PERDIÓ? (Bandera): Sí');
  } else {
    escribir('¿ALGUIEN PERDIÓ? (Bandera): No');
  }
});
