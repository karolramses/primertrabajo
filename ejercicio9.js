function primerMultiploDe5(arr){
    return arr.find(num => num % 5 === 0);
}
const arr =[1, 2, 3, 4, 5, 6,]
const r =primerMultiploDe5(arr);
console.log(r);