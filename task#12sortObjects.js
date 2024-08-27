function sortObjects(arr = {}, property) {
  return arr.sort((a, b) => {
    return a[property] - b[property];
  });
}

console.log(
  sortObjects(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 20 },
    ],
    "age"
  )
);

console.log(
  sortObjects(
    [
      { name: "Zara", salary: 50000 },
      { name: "John", salary: 70000 },
      { name: "Doe", salary: 60000 },
    ],
    "salary"
  )
);
