function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intento;
    while (parseInt(intento) !== numeroSecreto) {
        intento = prompt("Adivina el número del 1 al 10:");
    }
    alert("¡Correcto! El número era " + numeroSecreto);
}
adivinarNumero();