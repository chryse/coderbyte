//For this challenge you will be counting all the vowels in a string.
//Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed
//and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). 
//Do not count y as a vowel for this challenge. 

function vowelCount(str) {
	var arr = str.split("");
	var pattern = /[aeiou]/i;
	var count = 0;
	for(var i = 0; i < arr.length; i++) {
		if(pattern.test(arr[i])) {
			count++;
		}
	}
	return count;
}

console.log(vowelCount("Hello"));
console.log(vowelCount("coderbyte"));


function VowelCount(str) {
	var vowels = str.match(/[aeiou]/gi);
	return (vowels === null) ? 0 : vowels.length;
}
