

let arr = [1, 2, 3, 4, 22];

// 1. 
console.log(Math.max(...arr))

// 2. 
let max_res = arr[0];
for(let i of arr){
    max_res = max_res < i ? i : max_res;
}

// 3. 
let res = arr.sort((a, b) => a - b)[arr.length - 1]