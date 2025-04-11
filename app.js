
function busquedalineal(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i === elemento]) {
            return i;
        }
    }
    return i; 
}

const arreglo = [10, 8, 7, 6, 4, 9];
const elementobuscado = 6;
const indice = busquedalineal(arreglo, elementobuscado);
console.log(`El elemento buscado ${elementobuscado} se encuentra en el índice ${indice}`);
