function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (
    let start = 0, end = str.length - 1;
    start < str.length;
    start++, end--
  ) {
    if (str[start] !== str[end]) return false;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Racecar")); 
console.log(isPalindrome("Hello")); 