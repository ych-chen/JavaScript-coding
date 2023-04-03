

/* Promise 的作用是为了解决异步编程中的回调地狱问题，让代码更加简洁和可读。 */

const PENDING   = 'PENDING', FULFILLED = 'FULFILLED', REJECTED  = 'REJECTED';

class MyPromise{
    constructor(executor){
        this.status = PENDING;
        this.value  = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.value  = value;

                // 发布
                this.onFulfilledCallbacks.forEach(fn => fn());
            }
        }

        const reject = (reason) => {
            if(this.status === PENDING){
                this.status = REJECTED;
                this.reason = reason;

                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }

        try{
            executor(resolve, reject);
        } catch(error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected){
        if(this.status === FULFILLED){
            onFulfilled(this.value)
        }

        if(this.status === REJECTED){
            onRejected(this.reason)
        }

        if(this.status === PENDING){
            // 订阅的过程
            this.onFulfilledCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }
}

function myPromise(executor){

    // 初始化状态为 pending
    this.state = "pending";
    // 初始化值为 undefined
    this.value = undefined;
    // 初始化成功回调函数数组
    this.onFulfilledCallbacks = [];
    // 初始化失败回调函数数组
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
        if(this.state === "pending"){
            this.state = "fulfilled";
            this.value = value;
            this.onFulfilledCallbacks.forEach((callback) => callback());
        }
    }

    const reject = (reason) => {
        if(this.state ==="pending"){
            this.state = "rejected";
            this.value = reason;
            this.onRejectedCallbacks.forEach((callback) => callback());
        }
    }

    try{
        executor(resolve, reject)
    } catch(error){
        reject(error);
    }
}

myPromise.prototype.then = function(onFulfilled, onRejected){

    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;

    onRejected  = typeof onRejected === "function" ? onRejected : (error) => {throw error};

    // 如果是等待状态，则将函数加入对应列表中
    if(this.state === "pending"){
        this.onFulfilledCallbacks.push(onFulfilled);
        this.onRejectedCallbacks.push(onRejected);
    }

    // 如果状态已经凝固，则直接执行对应状态的函数
    if(this.state === "fulfilled"){
        onFulfilled(this.value);
    }
    if(this.state === "rejected"){
        onRejected(this.value);
    }
}