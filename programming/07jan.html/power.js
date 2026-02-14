function Power(b,p){
    let prod = 1;

    for(let i = 1; i <= p; i++){
        prod *= b;
    }
    return prod;
}
let ans = Power(2,3);
console.log(ans);

// another approach
function Power(b,p){
    if(p>=1){
        return b * Power(b,p-1)
    }
    return 1;
}
let a = Power(2,3)
console.log(a);