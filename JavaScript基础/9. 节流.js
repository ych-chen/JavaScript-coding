

// 节流如何做到一段时间内可以触发两次？
// let last = 0;

/* 
这个代码第一次会立即执行是因为在定义节流函数时
初始化了 prev 变量为当前时间，所以在第一次调用节流函数时，now - prev 的值肯定大于等于延迟时间，满足条件就会执行目标函数，并更新 prev 的值。
如果不想让第一次立即执行，可以把 prev 初始化为 0 ，这样第一次调用节流函数时，now - prev 的值肯定小于延迟时间，不会执行目标函数。
*/

function throttle(fn, delay){
    let last = 0;
    return function(){
        let now = Date.now();
        if(now - last > delay){
            fn.apply(this, arguments);
            last = now;
        }
    }
}