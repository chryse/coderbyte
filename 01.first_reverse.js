//For this challenge you will be reversing a string.

function reverse(string) {
	var arr = string.split("");
	var result = [];
	for(var i = arr.length-1; i >= 0; i--) {
		result.push(arr[i]);
	}

	return result.join("");
}

console.log(reverse("Hello World"));