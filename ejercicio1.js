function sumadeN(arr){
    let suma=0;
    for(let  i=0;i<arr.length;i++){
        suma+=arr[i];
    }
    return suma;
}
const n=[3,6,7,1,8];
const r=sumadeN(n);
console.log(`La suma d los numeros ${n} es: ${r} `);
