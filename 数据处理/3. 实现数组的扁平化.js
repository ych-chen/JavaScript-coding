
// （1）递归实现
let arr = [1, [2, [3, 4, 5]]];

function flatten(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] instanceof Array){
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}
flatten(arr);
