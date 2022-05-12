function firstRecurred(str) {
    let obj = {}
    let recurred = '';
    let min = 0;
    if (str) {
        str.split("").forEach(function (char) {
            if (str.split(char).length > min) {
                min = str.split(char).length;
                recurred = char;
            }
        }); 
        obj[recurred] = [str.indexOf(recurred), str.split(recurred, 2).join(recurred).length]
        return obj
    }
    else
        return {}
}
console.log(firstRecurred('AREDCBSDERD'));

