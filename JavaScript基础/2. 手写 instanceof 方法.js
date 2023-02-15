
/* 
1. 首先获取类型的原型
2. 然后获得对象的原型
3. 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 `null`，因为原型链最终为 `null`
*/
function myInstanceOf(obj, constructor){
    // 获取对象的原型
    let proto = Object.getPrototypeOf(obj);
    // 获取构造函数的原型
    let prototype = constructor.prototype;
    while(proto){
        if(proto === prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}