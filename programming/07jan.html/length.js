
function Len(n){
    let l = 0;
    while(n ){
        l++;
        n = Math.trunc(n/10)
    }
    return l;
}
let cnt = Len(34678);
console.log(cnt);