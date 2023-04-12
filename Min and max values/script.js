let arr = [5, 2, 7, 1, 9];
function MaxMin(arr){
    let max=Math.max(...arr);
    let min=Math.min(...arr);
    return {max,min};
}
let result=MaxMin(arr);
console.log(arr)
console.log(result);


