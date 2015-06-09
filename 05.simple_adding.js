//For this challenge you will be adding up all the numbers from 1 to a certain argument.
//Using the JavaScript language, have the function SimpleAdding(num) 
//add up all the numbers from 1 to num. 
//For the test cases, the parameter num will be any number from 1 to 1000. 

function simpleAdding(num) {
	if(num == 1) return 1;
	return num + simpleAdding(num-1);
}

console.log(simpleAdding(10));