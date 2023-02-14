


/* 深拷贝相对浅拷贝而言
如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，
因此对象获得的一个新的引用类型而不是一个原有类型的引用。 */

function deepCopy(obj){

    if( typeof obj !== 'object' || obj === null) return;

    let result = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
        }
    }
    return result;
}