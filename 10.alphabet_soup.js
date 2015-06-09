//For this challenge you will be sorting characters in a string.
//Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed 
//and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
//Assume numbers and punctuation symbols will not be included in the string. 

function alphabetSoup(str) {
	var arr = str.split("");
	return arr.sort().join("");
}

console.log(alphabetSoup("hello"));
console.log(alphabetSoup1("I am a boy"));

function alphabetSoup1(str) {
	var arr = str.split("");
	sort(arr);
	return arr.join("");
}

function sort(arr) {
	for(var i = 1; i < arr.length; i++) {
		var tmp = arr[i];
		var count = i;
		while(count > 0 && arr[count-1] > tmp) {
			arr[count] = arr[count-1];
			count--;
		}
		arr[count] = tmp;
	}
	return arr;
}

console.log(alphabetSoup1("hello"));
console.log(alphabetSoup1("I am a boy"));