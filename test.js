let a = 'aa'
function first(){
    console.log('111');
    second();
    console.log('333');
}

function second(){
    console.log('222');
}

first()