function sum(arr1, arr2){
    const combinedArr = [...arr1, ...arr2];
    let sum=0;
    for (let num of combinedArr) {
        sum += num;
    }
    return sum;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = sum(arr1,arr2)

console.log(result)