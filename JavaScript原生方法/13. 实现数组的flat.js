
// Array.prototype.flat() 是一个方法，
// 它可以创建一个新的数组，把所有子数组的元素按照指定的深度递归地连接起来

/* 
var arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]
arr2.flat(2); // [1, 2, 3, 4 ,5 ,6]
*/

Array.prototype.myflat = function(depth = 1){

    let res = [];
    function flatten(arr, level){
        for(let value of arr){
            if(Array.isArray(value) && level > 0){
                flatten(value, level - 1)
            } else {
                res.push(value)
            }
        }
    }

    flatten(this, depth)
    return res
}

Array.prototype.myflat = function(depth = 1){
    let res = [];
    function flatten(arr, level){
        for(let value of arr){
            if(Array.isArray(value) && level > 0){
                flatten(value, level - 1)
            } else {
                res.push(value)
            }
        }
    }
    flatten(this, depth);
    return res;
}