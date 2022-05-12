//Implementation filter-find-slice-splice-some;



// Filter
// filtering numbers that are positive:
function filter(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        };
    };

    return result;
};

console.log(filter([0, -1, 4, 5]));


// Find
// Finding the number 3 in an array of numbers;

function find(arr, n) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            index = i;
        }
    }
    return `${n} is implemented in index ${index}`;
}
console.log(find([1, 5, 3, 4, 8], 3));


// Slice
function slice(arr, start, end) {
    let result = [];
    if (start > 0) {
        for (let i = start + 1; i <= end; ++i) {
            result.push(arr[i]);
        }
        return result;
    } else {
        let indexes = arr.length - Math.abs(start);
        for (let i = indexes; i < arr.length; i++) {
            result.push(arr[i]);
        }
        return result;
    }
}
console.log(slice([0, 1, 2, 3, 4, 5], 1, 4));
console.log(slice([0, 1, 2, 3, 4, 5], -3));




// Some
// check if some of indexes are positive;
function some(arr) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) result = true;
    }
    return result;
}
  console.log(some([-1,12,0,8]));
  console.log(some([-1,-8]));
  