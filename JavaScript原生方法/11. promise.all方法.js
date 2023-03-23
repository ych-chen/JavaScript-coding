

/* all(iterable)：这个方法返回一个新的promise对象
该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
这个新的promise对象在触发成功状态以后，
会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；
如果这个新的promise对象触发了失败状态，
它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
Promise.all方法常被用于处理多个promise对象的状态集合。
 */

function PromiseAll(promises){
    return new Promise((resolve, reject) =>{
        if(!Array.isArray(promises)){
            throw new TypeError(`argument must be a array`)
        }
        let count = 0;
        let results = [];
        for( let i = 0; i < promises.length; i++){
            Promise.resolve(promises[i]).then(
                (value) => {
                    results[i] = value;
                    count++;
                    if(count === promises.length){
                        resolve(results);
                    }
                },
                (reason) => {
                    reject(reason);
                }
            )
        }
    })
}

Promise.resolve().then()