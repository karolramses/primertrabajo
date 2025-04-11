function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingresa un número:"));
    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número válido.");
        return; 
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tablaMultiplicar();