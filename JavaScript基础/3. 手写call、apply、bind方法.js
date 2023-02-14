

// call、apply是立即执行、bind是返回一个新的函数

Function.prototype.myCall = function(context) {
    
    // 获取参数
    let args = [...arguments].slice(1),
        result = null;
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
}

Function.prototype.MyApply = function(context){
    
    let result = null
    context.fn = this;
    result = arguments[1] ?  context.fn([...arguments[1]]) : context.fn();
    
    delete context.fn;
    return result;
}

// test.bind 只会生效一次，下式等同于  t = test.bind(obj)
// t = test.bind(obj).bind(obj2)

//  重写 bind 实质上就是 返回一个没有执行call的函数
Function.prototype.myBind = function(context, ...args){
    // 获取参数
    const self = this;
    return function (...newArgs){
        // 调用原函数，将context作为this值，将预设参数和新参数合并传入
        return self.apply(context, [...args,...newArgs]);
    }

}