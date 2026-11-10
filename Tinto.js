// Algoritmo Preparar_tinto
const { escribir, ejecutar } = require('../io');

ejecutar(async () => {
  escribir('Preparación de un tinto');
  escribir('Cantidad de agua en mililitros: 200ml');
  escribir('Cantidad de cafe: 1.5g');

  escribir('Paso 1: Agregar 200ml de agua a una olla');
  escribir('Paso 2: Calentar el agua durante 3 minutos');
  escribir('Esperar hasta que el agua alcance aproximadamente 95 grados celsius (punto de ebullición)');
  escribir('Paso 3: Agregar 1.5g de cafe instantaneo al agua caliente');
  escribir('Paso 4: Revolver durante 15 seg');
  escribir('Paso 5: Servir el tinto en una taza');
  escribir('El tinto está listo para disfrutar!');
});
