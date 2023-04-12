const str="The quick brown fox jumps over the lazy dog  ";
function wordCount(str){
    const words=str.split(" ");
    const countMap=new Map();
    for(let i=0;i<words.length;i++){
        const word=words[i].toLowerCase();
        if(countMap.has(word)){
            countMap.set(word,countMap.get(word)+1);
        }else{
            countMap.set(word,1);
        }
    }
    return countMap;
}
let solution=wordCount(str);
console.log(solution);