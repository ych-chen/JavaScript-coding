


//  ES6方法

const array1 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array1));

// ES5方法：使用map存储不重复的数字

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArray(array){
    let map = {}
    let res = []
    for(var i = 0; i < array.length; i++){
        if(!map.hasOwnProperty([array[i]])){
            map[array[i]] = i;
            res.push(array[i])
        }
    }
    return res;
}
uniqueArray(array);
