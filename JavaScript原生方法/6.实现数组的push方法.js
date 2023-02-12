



Array.prototype.Mypush = function(){
    var args = [...arguments]
    args.map(item => {
        this[this.length] = item;
    })
    return this.length;
}