let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr2 = arr.filter(el => el % 2 === 0).map(el => el ** 2).reduce((acc, curr) => acc + curr);

console.log(arr2);