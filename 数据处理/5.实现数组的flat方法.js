


/* 
flat() 方法会按照一个可指定的深度递归遍历数组
并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]
*/

const arr2 = [0, 1, 2, [[[3, 4]]]];

function _flat(arr, depth){
    if( !Array.isArray(arr) || depth <= 0){
        return arr;
    }
    return arr.reduce((prev,cur) => {
        if(Array.isArray(cur)){
            return prev.concat(_flat(cur,depth-1));
        } else {
            return prev.concat(cur);
        }
    },[]);
}

_flat(arr2,3)