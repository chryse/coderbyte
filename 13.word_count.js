//For this challenge you will be determining how many words a sentence contains.
//Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed 
//and return the number of words the string contains 
//(ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.

function wordCount(str) {
	var arr = str.split(" ");
	console.log("arr", arr);
	return arr.length;
}

console.log(wordCount("Never eat shredded wheat  dfsd  sdfsf"));


function WordCount(str) {
	var pattern = /[^\s]+/gi;
	var words = str.match(pattern);
	console.log("words", words);
	return words === null ? 0 : words.length;      
}

console.log(WordCount("Never eat shredded wheat   sdfsf fds"));
