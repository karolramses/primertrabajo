function order(arr){
    for (let i=0;i<arr.length-1;i++){
        for (let j=0;j<arr.length-1-i;j++){
            if (arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                }
            }
        }
    return arr;
}
const arr=[12,4,6,5,9,7];
const r=order(arr);
console.log(`Ordenado: ${r} `);