


// forEach: 遍历数组，无返回值，不改变原数组
// e 当前元素 ; index当前元素索引值 ; array整个数组，第二个参数改变this指向
//.forEach(function(e,index,arr){})


Array.prototype.MyforEach = function(fn, thisBinding = globalThis){
    if( fn instanceof Function){
        throw Error('参数必须是一个函数');
    }
    // 排除this为非可迭代对象情况
    if(this == null || typeof this[Symbol.iterator] !== 'function'){
        throw new TypeError(`${this}is not a iterable`);
    }
    for(let i = 0, len = this.length; i < len; i++){
        fn.call(thisBinding,this[i],i,this);
    }
}