function generateFibonacci(num) {
  let a = 0,
    b = 1,
    c = null;
  const arr = [0];
  while (c <= num) {
    arr.push(b);
    c = a + b;
    a = b;
    b = c;
  }

  return arr;
}

console.log(generateFibonacci(15));
console.log(generateFibonacci(10));
console.log(generateFibonacci(50));