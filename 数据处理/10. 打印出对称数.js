

function isSymmetryNum(start, end){

    let res = [];
    for( let i = start; i <= end; i++){
        let string = String(i);
        if( [...string].reverse().join('') == string){
            res.push(i)
        }
    }
    return res;
}