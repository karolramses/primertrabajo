function invertirArray(arr){
    let resl =[];
    for (let i =arr.length - 1;i>=0;i--) {
        resl.push(arr[i]);
    }
    return resl;
}
const arr =[1, 2, 3, 4, 5];
const arrayInvertido = invertirArray(arr);
console.log(arrayInvertido);