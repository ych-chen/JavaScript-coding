

String.prototype.Myrepeat= function (n) {
    let str = this;
    let res = ''
    while (n) {
        res += str;
        n--
    }
    return res
}