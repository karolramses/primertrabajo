function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            "Menú:\n1. Saludar\n2. Decir adiós\n3. Salir\nElige una opción:"
        );

        switch (opcion) {
            case "1":
                console.log("¡Hola!");
                break;
            case "2":
                console.log("¡Adiós!");
                break;
            case "3":
                console.log("Saliendo del menú...");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "3");
}