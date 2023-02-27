


function debounce(fn, wait){
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            fn.apply(this, arguments);
        },wait)
    }
}