function cuentaRegresiva() {
    let numero = parseInt(prompt("Ingresa un número para comenzar la cuenta regresiva:"));

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}
cuentaRegresiva();