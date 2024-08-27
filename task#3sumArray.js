function sumArray(arr = []) {
  return arr.reduce((acc, item) => acc + item);
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, -2, -3, -4, -5]));
console.log(sumArray([10, 20, 30]))