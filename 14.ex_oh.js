//For this challenge you will traverse a string and determine if there is an equal amount of certain characters.
//Using the JavaScript language, have the function ExOh(str) take the str parameter being passed 
//and return the string true if there is an equal number of x's and o's, 
//otherwise return the string false. Only these two letters will be entered in the string, 
//no punctuation or numbers. 
//For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

function exOh(str) {
	var xCount = 0;
	var oCount = 0;
	for(var i = 0; i < str.length; i++) {
		if(str[i] == "x" || str[i] == "X") {
			xCount++;
		}
		else if(str[i] == "o" || str[i] == "O") {
			oCount++;
		}
	}

	return (xCount == oCount) ? true : false;
}

console.log(exOh("xooxxxxooxo"));
console.log(exOh("xoxo"));


function ExOh(str) {
	console.log(str.split(/x/i));
	console.log(str.split(/o/i));
	return str.split(/x/i).length === str.split(/o/i).length; 
}

ExOh("xoxxoxooxxo");