

let fangdou = function(fn, delay){

    let timer = null;
    return function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(this, arguments);
        },delay)
    }
}


let jieliu = function(fn, delay){
    let old_time = 0;
    return function(){
        let now_time = Date.now();
        if(now_time - old_time > delay){
            fn.apply(this, arguments);
            old_time = now_time;
        }
    }
}

const promise = new Promise((resolve, reject) => {
    reject(new Error('111'));
    resolve('222')
})

promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message)).then(res => console.log(res))

function aa(x,y){
    x.push(4);
    y = [1]
}
function bb(){
    const a = [1,2,3]
    const b = [];
    aa(a,b);
    console.log(`${a.length},${b.length}`)
}
bb()

const res = /cc/y;
res.test('ccwwcc');
console.log(res.lastIndex)
res.test('ccwwcc');
console.log(res.lastIndex)

var num = 117;
function test1(){
    console.log(this.num)
}
(function(){
    'use strict';
    test1();
})()
'use strict';
function test2(){
    console.log(this.num)
}
setTimeout(function(){
    test2.call(this)
},0)
'qwe'.replace()

let map = new Map();
map.forEach((va))