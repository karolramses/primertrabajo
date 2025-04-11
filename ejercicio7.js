function convertirAMayusculas(n) {
    return n.map(nombre => nombre.toUpperCase());
}
const n =["juan","maria","pedro"];
const nombresMayusculas = convertirAMayusculas(n);
console.log(nombresMayusculas);
