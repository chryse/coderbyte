//For this challenge you will determine if two characters are separated a specific way in the string.
//Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and 
//return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once 
//(ie. "lane borrowed" would result in true because there is exactly three characters between a and b). 
//Otherwise return the string false.

function abCheck(str) {
	var pattern = /a[*]+b/gi;
	var arr = str.match(pattern);
	if(arr == null) return false;

	for(var i = 0; i < arr.length; i++) {
		var tmp = arr[i].split("");
		tmp.shift();
		tmp.pop();
		if(tmp.length == 3) return true;
	}

	return false;
}

console.log(abCheck("lane borrowed"));
