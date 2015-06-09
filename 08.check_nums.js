//For this challenge you will be comparing two numbers and determining which one is greater.
//Using the JavaScript language, have the function CheckNums(num1,num2) 
//take both parameters being passed and return the string true if num2 is greater than num1, 
//otherwise return the string false. If the parameter values are equal to each other then return the string -1. 

function checkNums(num1, num2) {
	if(num1 < num2) {
		return true;
	}
	else if (num1 == num2) {
		return "-1";
	}
	else {
		return false;
	}
}


console.log(checkNums(1, 1));
console.log(checkNums(1, 2));
console.log(checkNums(2, 1));