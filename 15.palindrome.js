//For this challenge you will determine if a string is written the same way forward and backwards.
//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed 
//and return the string true if the parameter is a palindrome, 
//(the string is the same forward as it is backward) otherwise return the string false. 
//For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function palindrome(str) {
	str = str.replace(/[^a-z]+/gi, "").toLowerCase();
	
	for(var i = 0; i < Math.floor(str.length/2); i++) {
		if(str[i] !== str[str.length-1-i]) return false;
	}
	return true;
}

console.log("level", palindrome("level"));
console.log("levels", palindrome("levels"));
console.log("A car, a man, a maraca", palindrome("A car, a man, a maraca"));

function Palindrome(str) {
	str = str.replace(/\W/gi, "").toLowerCase();
	console.log(str);
	return str === str.split("").reverse().join("");
}


console.log("level", Palindrome("level"));
console.log("levels", Palindrome("levels"));
console.log("A car, a man, a maraca", Palindrome("A car, a man, a maraca"));