let suma = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    suma += i;
  }
  while (suma > 500) {
    console.log("La suma ha superado 500. Deteniendo...");
    break;
  }
}

console.log("Suma total de impares entre 1 y 50:", suma);
