function pedirNumeroMayorQueCero() {
    let numero;
    do {
        numero = parseInt(prompt("Ingresa un número mayor que 0:"));
    } while (numero <= 0 || isNaN(numero));

    console.log("Número válido:", numero);
}
pedirNumeroMayorQueCero();