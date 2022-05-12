function getTotal(arr){
    let result = arr.reduce(function totalNum(acc,indexes){
        if (Array.isArray(indexes)){
            return indexes.reduce(totalNum);
        }
        return acc + 1;
    }, 0);
    return result;
}
console.log(getTotal([1, [2, [3, [4, [5, 6]]]]]));