

// call、apply是立即执行、bind是返回一个新的函数

Function.prototype.myCall = function(context, ...args) {
    

    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    let result = context.fn(...args);

    // 将属性删除
    delete context.fn;

    return result;
}

Function.prototype.MyApply = function(context, args){

    context = context || window;
    context.fn = this;
    
    let result = args ?  context.fn([...args]) : context.fn();
    
    delete context.fn;

    return result;
}

// test.bind 只会生效一次，下式等同于  t = test.bind(obj)
// t = test.bind(obj).bind(obj2)

//  重写 bind 实质上就是 返回一个没有执行call的函数
// 手写 bind
Function.prototype.myBind = function (context, ...args) {
  // 保存原函数的引用
  let self = this;
  // 返回一个新的函数
  return function (...newArgs) {
    // 判断新函数是否被当作构造函数调用
    if (this instanceof self) {
      // 如果是，就用 this 作为上下文，并合并参数
      return self.call(this, ...args, ...newArgs);
    } else {
      // 如果不是，就用 context 作为上下文，并合并参数
      return self.call(context, ...args, ...newArgs);
    }
  }
}