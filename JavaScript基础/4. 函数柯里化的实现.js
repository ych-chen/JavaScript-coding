

/* 函数柯里化
一种将多入参函数变成单入参函数
函数柯里化的基本思想是，将一个接受多个参数的函数，转化为一个接受一个参数的函数，并返回一个新的函数，该新函数可以接受剩余的参数，并返回最终的结果。
这个过程可以重复多次，直到所有的参数都被传入
 */

function curry(fn){
    return function curried(...args){
        if(args.length < fn.length){
            return function(...newArgs){
                // 如果传入的参数个数小于原函数的参数个数，就返回一个新的函数，继续接受参数
                return curried(...args, ...newArgs);
            }
        }
        // 如果传入的参数个数等于或大于原函数的参数个数，就调用原函数，返回结果
        else{
            return fn(...args);
        }
    }
}