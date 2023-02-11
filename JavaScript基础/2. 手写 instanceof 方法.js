
/* 
1. 首先获取类型的原型
2. 然后获得对象的原型
3. 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 `null`，因为原型链最终为 `null`
*/

function myInstanceof(left, right){
    let proto = Object.getPrototypeOf(left),
        prototype = right.prototype;

    while(true){
        if(!proto) return false;
        if(proto === prototype) return true;

        proto = Object.getPrototypeOf(proto);
    }
}