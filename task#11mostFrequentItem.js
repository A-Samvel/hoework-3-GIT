function mostFrequentItem(arr = []) {
  const obj = {};

  arr.forEach((item) => {
    if (obj.hasOwnProperty(item)) obj[item]++;
    else obj[item] = 1;
  });

  let max = 0,
    name = null;

  for (let value in obj) {
    if (obj[value] > max) {
      max = obj[value];
      name = value;
    }
  }
  return name;
}

console.log(mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
console.log(
  mostFrequentItem(["apple", "banana", "apple", "orange", "banana", "banana"])
);
console.log(mostFrequentItem([10, 20, 10, 30, 20, 10]));
