



/* map: 返回一个新数组，不会改变原数组
新数组的元素值是每次函数return的返回值 ; 不写return，接收的新数组的元素值将全为空
var b = [1,2,3].map(function(x){
	return x*x; //b得值是[1,4,9]
}); */


Array.prototype.myMap = function(fn, thisBinding){

    if( fn instanceof Function){
        throw new TypeError(`${fn} is not a function`);
    }
    // 排除this为非可迭代对象情况
    if (this == null || typeof this[Symbol.iterator] !== "function") {
        throw new TypeError(`${this} is not a iterable`);
    }
    const res = [];
    for(let i = 0, len = this.length; i < len; i++){
        res.push(fn.call(thisBinding,this[i],i,this));
    }
    return res;
}