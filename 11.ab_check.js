//For this challenge you will determine if two characters are separated a specific way in the string.
//Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and 
//return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once 
//(ie. "lane borrowed" would result in true because there is exactly three characters between a and b). 
//Otherwise return the string false.

function abCheck(str) {
	var pattern = /a.{3}b/gi;
	var pattern1 = /b.{3}a/gi;
	var arr = str.match(pattern);
	if(arr == null) arr = [];
	var arr1 = str.match(pattern1);
	if(arr1 == null) arr1 = [];

	// if(arr.length > 0 || arr1.length > 0) return true;
	// else return false;
	return (arr.length > 0 || arr1.length > 0) ? true : false;
	
}

console.log("lane borrowed");
console.log(abCheck("lane borrowed"));

console.log("Laura sobs");
console.log(abCheck("Laura sobs"));

console.log("away obe");
console.log(abCheck("away obe"));

console.log("abccccazzzb");
console.log(abCheck("abccccazzzb"));

console.log("bzzza");
console.log(abCheck("bzzza"));

console.log("absec");
console.log(abCheck("absec"));

function ABCheck(str) { 
  return /a...b/g.test(str);
}

function ABCheck(str) { 
  var match=str.match(/a...b/ig)
  return (match)?'true':'false';
         
}