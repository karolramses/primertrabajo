function ContadordePares(arr){
    let contador=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0){
            contador++;
            }
        }
    return contador;
}
const arr=[1,8,3,5,9,2,6,4,18,20];
const r=ContadordePares(arr);
console.log(`Cantidad de números Pares son: ${r} `);