


// filter: 过滤不符合条件的元素,保留true，过滤false,返回一个新数组，不改变原数组
/* var brr = [1,2,3].filter(function(item)){
	return item%2;  //返回值为奇数的元素
} */

Array.prototype.myFilter = function(fn){

    if( fn instanceof Function){
        throw Error('参数必须是一个函数');
    }
    const res = [];
    for(let i = 0, len = this.length; i < len; i++){
        if( fn(this[i]) ){
            res.push(this[i]);
        }
    }
    return res;
}