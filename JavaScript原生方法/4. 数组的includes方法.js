

/* 
includes() 方法用来判断一个数组是否包含一个指定的值，
根据情况，如果包含则返回 true，否则返回 false。
includes(searchElement, fromstart)
*/

Array.prototype.myIncludes = function (value, start = 0){

    start = start < 0 ? start + this.length : start;
    for(let i = start; i < this.length; i++){
        if(this[i] == value){
            return true
        }
    }
    return false;
}