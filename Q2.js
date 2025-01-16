function mergeArrays(arr1, arr2) {
    const combinedArr = [...arr1, ...arr2];
    return combinedArr;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = mergeArrays(arr1, arr2);

console.log(result);
