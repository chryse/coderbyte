//For this challenge you will be determining whether or not certain characters are in correct positions.
//Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine 
//if it is an acceptable sequence by either returning the string true or false. 
//The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) 
//and for the string to be true each letter must be surrounded by a + symbol. 
//So the string to the left would be false. The string will not be empty and will have at least one letter. 

//Input = "+d+=3=+s+"  Output = "true"
//Input = "f++d+"  Output = "false"

function simpleSymbols(str) {
	var pattern = /([^\+][a-z])|([a-z][^\+])/gi;
	var arr = ("&"+str+"&").match(pattern);
	if(arr === null) return true;
	else return false;

}

console.log(simpleSymbols("+d+=3=+s+"));
console.log(simpleSymbols("f++d+"));
console.log(simpleSymbols("+++=="));
console.log(simpleSymbols("+d====a+"));
console.log(simpleSymbols("2+a+a+"));
console.log(simpleSymbols("+z+z+==+a+"));


function SimpleSymbols(str) { 

  // code goes here  
  return ('=' + str + '=').match(/([^\+][a-z])|([a-z][^\+])/gi)===null; 
         
}
