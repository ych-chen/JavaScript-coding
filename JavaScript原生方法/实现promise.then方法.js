

/* 
 */

Promise.prototype.then = function(onFulfilled, onRejected){

    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;

    onRejected = typeof onRejected === "function" ? onRejected : (error) => {throw error};

    let newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                let result = onFulfilled(this.value);
                handleResult(result, newPromise, resolve, reject);
            }
            catch(error){
            reject(error);
            }
        
    }))
    
}