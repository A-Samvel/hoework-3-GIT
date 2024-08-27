function toTitleCase(str){
	let newStr = str[0].toUpperCase()
    for(let i = 1; i < str.length; i++){
		if(str[i-1] === ' ') newStr += str[i].toUpperCase()
		else newStr += str[i].toLowerCase()
	}
	return newStr
}

console.log(toTitleCase("hello world")); // Output: "Hello World"
console.log(toTitleCase("javascript is fun")); // Output: "JavaScript Is Fun"
console.log(toTitleCase("OPENAI")); // Output: "Openai"