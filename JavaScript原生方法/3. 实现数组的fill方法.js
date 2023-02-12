


/* 
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素,
不包括终止索引。

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
*/

Array.prototype.Myfill = function(value, start = 0, end){

    end = end < 0 ? this.length + end : end;

    for(let index = start; start < end; index++){
        this[index] = value;
    }
    return this;
}