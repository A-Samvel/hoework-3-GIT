function largestNumber(arr = []) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > res) res = arr[i];
  }

  return res;
}


console.log(largestNumber([1, 3, 5, 7, 9]));
console.log(largestNumber([-10, -5, 0, 5, 10]));
console.log(largestNumber([34, 23, 12, 56, 89]));