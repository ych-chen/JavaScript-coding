

function randomUniqueArr(len, min, max){
    
    let res = new Set();
    while(res.size < len){
        let num = Math.floor(Math.random()*(max - min+1)+min);
        if(!res.has(num)){
            res.add(num);
        }
    }
    return [...res];
}