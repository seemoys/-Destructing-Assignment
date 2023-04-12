let arr=[1,2,3,4,5];
function fetchElements(arr){
    const [first,second,...rest]=arr;
    let last=rest.pop();
    return [first,second,last];
}
let result=fetchElements(arr);
console.log(result);

