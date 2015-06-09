//For this challenge you will be determining the largest word in a string.
//Using the JavaScript language, have the function LongestWord(sen) take the sen parameter 
//being passed and return the largest word in the string. 
//If there are two or more words that are the same length, 
//return the first word from the string with that length. 
//Ignore punctuation and assume sen will not be empty. 

//Input = "fun&!! time" Output = "time"
//Input = "I love dogs" Output = "love"

function longestWord(sen) {
	var arr = sen.split(" ");
	var longest = "";
	for(var i = 0; i < arr.length; i++) {
		if(/\W/.test(arr[i])) {
			//var tmp = "";
			// for(var j = 0; j < arr[i].length; j++) {
			// 	if(!pattern.test(arr[i][j])) {
			// 		tmp += arr[i][j];
			// 	}
			// }
			//arr[i] = tmp;

			//use replace
			arr[i] = arr[i].replace(/\W/g, "");
		}

		if(arr[i].length > longest.length) longest = arr[i];
	}

	return longest;
}

console.log(longestWord("fun&!! time"));
console.log(longestWord("hello world"));
console.log(longestWord("123456789 98765432"));
console.log(longestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));


function LongestWord(sen) { 
  var words = sen.split(" ").sort(function(a, b){
    return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length;
  });
  
  return words.shift(); 
         
}


var a = "..ddaadd#$%";
var b = a.replace(/\W+/, "");
console.log(a);
console.log(b);