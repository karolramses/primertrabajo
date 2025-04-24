let suma = 0;

while (true) {
  const numero = parseInt(prompt("Ingresa un número (0 para terminar):"));

  if (numero === 0) {
    break;
  }

  suma += numero;
}

console.log("La suma total es:", suma);
