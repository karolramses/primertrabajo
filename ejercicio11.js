function fibonacci10() {
    let a = 0, b = 1;
    let serie = [a, b];

    for (let i = 2; i < 10; i++) {
        let siguiente = a + b;
        serie.push(siguiente);
        a = b;
        b = siguiente;
    }

    console.log("Serie de Fibonacci (10 primeros):", serie);
}
fibonacci10();