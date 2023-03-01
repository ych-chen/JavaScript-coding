



/* lodash.get是一个JavaScript库Lodash中的一个方法
它可以根据对象的路径获取值，如果解析的值是undefined，会以默认值取代。
它可以避免因为对象中的某个属性是null或undefined而导致的错误
*/

/* 
const obj = {
    a: {
        b: 123
    },
    arr: [
        {
            demo: 'demo'
        }
    ]
}
function getKey(obj, str) {
   
}
console.log(getKey(obj, 'a.b'));
console.log(getKey(obj, 'arr[0].demo'));

var object = { 'a': [{ 'b': { 'c': 3 } }] }; _.get(object, 'a[0].b.c'); // => 3
var object = { 'a': [{ 'b': { 'c': 3 } }] }; _.get(object, ['a', '0', 'b', 'c']); // => 3
var object = { 'a': [{ 'b': { 'c': 3 } }] }; _.get(object, 'a.b.c', 'default'); // => default
*/

function getKey(obj, path, defaultValue="undefined"){

    let newPath = [];
    
    if(Array.isArray(path)){
        newPath = path;
    } else {
        newPath = path.replace(/\[/g,'.').replace(/\]/g,'').split('.')
    }

    return newPath.reduce((prev, curr) => {
        return (prev || {})[curr];
    }, obj) || defaultValue;
}