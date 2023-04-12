function swapNumber(x,y){
    [x,y]=[y,x];
    return [x,y];
}
let x=5,y=10;
console.log(x,y);
[x,y]=swapNumber(x,y);
console.log(x,y);