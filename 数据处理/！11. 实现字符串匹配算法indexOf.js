
// 双循环暴力破解
function indexOf(str, pattern){

    let n = str.length;
    let m = pattern.length;

    for(let i = 0; i <= n - m; i++){
        
        let match = true;

        for(let j = i; j < m; j++){
            if(str[i+j] != pattern[j]){
                match = false;
                break;
            }
        }

        if(match){
            return i;
        }
    }
    return -1;
}

// 双指针
function indexOf(str, pattern){

    let n = str.length;
    let m = pattern.length;

    let i = 0, j = 0;

    while( i < n && j < m){
        if(str[i] == pattern[j]){
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    if(j == m){
        return i - j;
    } else {
        return -1;
    }
    
}