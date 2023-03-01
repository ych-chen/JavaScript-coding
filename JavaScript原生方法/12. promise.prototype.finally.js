


/* 
Promise.prototype.finally() 是一个方法，它可以在一个 Promise 对象被解决
（无论是成功还是失败）时执行一个回调函数，并返回一个等价的 Promise 对象，让你可以继续链式调用其他 Promise 方法。
这样可以避免在 Promise 的 then() 和 catch() 方法中重复代码。
*/
Promise.prototype.finally = function(callback){

    return this.then(value => {
        return Promise.resolve(callback()).then( value=>value);
    }, reason => {
        return Promise.resolve(callback()).then(() => {
            throw reason
        })
    })
}