


/* 浅拷贝是指，一个新的对象对原始对象的属性值进行精确地拷贝.
如果拷贝的是基本数据类型，拷贝的就是基本数据类型的值;
如果是引用数据类型，拷贝的就是内存地址。
如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化。 */


//1. object.assign(target, source_1, ···)

let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target, object2, object3);
console.log(target); 

// 2. 手写
function shallowCopy(obj){

    if (typeof obj !== 'object' || obj === null){
        return obj;
    }
    let result = Array.isArray(obj) ? {} : [];

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = obj[key]
        }
    }
    return result;
}
