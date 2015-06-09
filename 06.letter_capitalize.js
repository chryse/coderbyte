//For this challenge you will be capitalizing certain characters in a string.
//Using the JavaScript language, have the function LetterCapitalize(str) 
//take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space. 

//Input = "hello world" Output = "Hello World"
//Input = "i ran there" Output = "I Ran There"

function capitalize(str) {
	var arr = str.split(" ");
	for(var i = 0; i < arr.length; i++) {
		var tmp = arr[i].split("");
		tmp[0] = tmp[0].toUpperCase();
		arr[i] = tmp.join("");
	}

	return arr.join(" ");
}

console.log(capitalize("hello world"));
console.log(capitalize("i ran there"));