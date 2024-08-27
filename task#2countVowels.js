function countVowels(str) {
  str = str.toLowerCase();
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        res++;
        break;

      case "e":
        res++;
        break;

      case "i":
        res++;
        break;

      case "o":
        res++;
        break;

      case "u":
        res++;
        break;
    }
  }
  return res;
}

console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));
console.log(countVowels("OpenAI"));