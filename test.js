

let fangdou = function(fn, delay){

    let timer = null;
    return function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(this, arguments);
        },delay)
    }
}


let jieliu = function(fn, delay){
    let old_time = 0;
    return function(){
        let now_time = Date.now();
        if(now_time - old_time > delay){
            fn.apply(this, arguments);
            old_time = now_time;
        }
    }
}

const promise = new Promise((resolve, reject) => {
    reject(new Error('111'));
    resolve('222')
})

promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message)).then(res => console.log(res))