let arr = [1,2,3,4,5,6,3,1];
let [a,...arr1] = arr;
let first = a;
let arr2 = [...arr1];
console.log(a);
console.log(arr2);