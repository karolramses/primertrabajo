function sumarPositivos(arr){
    let suma = 0;
    for (let num of arr){
        if (num > 0) suma += num;
    }
    return suma;
}
const arr =[-1, 2, 3, -4, 5, -6];
const r =sumarPositivos(arr);
console.log(r);