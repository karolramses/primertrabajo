function BusEle(arr,nombre){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===nombre){
            return i;
        }
    }
    return -1;
}
const arr =["Ana","Luis","fito","Carlos","María"];
const nombre ="Carlos";
const r =BusEle(arr,nombre);
console.log(`La posision es: ${r} `);