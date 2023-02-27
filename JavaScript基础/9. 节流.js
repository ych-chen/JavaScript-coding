

function throttle(fn, delay){
    let last = Date.now();
    return function(){
        let now = Date.now();
        if(now - last > delay){
            fn.apply(this, arguments);
            last = now;
        }
    }
}