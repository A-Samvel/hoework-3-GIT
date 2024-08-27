function findLongestWord(str) {
  str = str.replace(/[^a-zа-яё0-9\s]/gi, " ");
  const arr = str.split(" ");

  let res = "";
  arr.forEach((word) => {
    if (res.length <= word.length) res = word;
  });
  return res;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
console.log(findLongestWord("JavaScript is awesome"));
console.log(findLongestWord("Hello world!"));