

/* 
**reduce**: 为数组中的每一个元素依次执行回调函数

回调函数四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，原始数组

- 如果没有提供initialValue，reduce 从索引1的地方开始执行 ，跳过第一个索引
- 如果提供initialValue，从索引0开始
- 空数组使用reduce不提供初始值，会报错，因为没有索引1
*/

Array.prototype.Myreduce() = function(fn,initValue) {

    if(typeof fn !== 'function' || this.length == 0){
        throw new TypeError(`TypeError`);
    }
    let res = initValue ? initValue : this[0];
    for(let i = initValue ? 0 : 1, len = this.length; i < len; i++){
        res =  fn(res, this[i], i, this);
    }
    return res;
}