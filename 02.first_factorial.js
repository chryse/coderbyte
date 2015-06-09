//For this challenge you will be determining the factorial for a given number.

function factorial(num) {
	if(num == 1) return 1;
	return num * factorial(num-1);
}

console.log(factorial(10));

function factorial1(num) {
	var result = 1;
	for(var i = num; i >=1; i--) {
		result *= i;
	}
	return result;
}

console.log(factorial1(10));