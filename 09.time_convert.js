//For this challenge you will be determining the difference in hours and minutes between two given times.
//Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed 
//and return the number of hours and minutes the parameter converts to 
//(ie. if num = 63 then the output should be 1:3). 
//Separate the number of hours and minutes with a colon.

function timeConvert(num) {
	var hour = Math.floor(num / 60);
	var minute = num % 60;
	return hour.toString() + " : " + minute.toString();
}

console.log(timeConvert(60));
console.log(timeConvert(63));