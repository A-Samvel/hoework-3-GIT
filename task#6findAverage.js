function findAverage(arr = []) {
  const sum = arr.reduce((acc, item) => acc + item);
  return sum / arr.length;
}

console.log(findAverage([10, 20, 30, 40, 50]));
console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([100, 200, 300]));