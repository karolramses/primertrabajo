function MayorYmenor(arr){
    let Mayor=arr[0];
    let menor=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>Mayor){
                Mayor=arr[i];}
        if(arr[i]<menor){
                menor=arr[i];}
    }
    return{Mayor,menor};
}

const n=[4,2,3,8,12];
const r=MayorYmenor(n);
console.log(`El número Mayor es:${r.Mayor} y el menor es:${r.menor} `);