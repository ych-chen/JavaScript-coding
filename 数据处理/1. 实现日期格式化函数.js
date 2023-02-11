

/* 
输入：
dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日
*/
function dateFormat(dateInput, format){

    let day = dateInput.getDate();
    let month = dateInput.getMonth() + 1;
    let year = dateInput.getFullYear();
    format = format.replace(/yyyy/,year).replace(/MM/,month).replace(/dd/,day);

    return format;
}