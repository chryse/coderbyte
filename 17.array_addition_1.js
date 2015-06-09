//For this challenge you will determine if numbers in an array can add up to a certain number in the array.
//Using the JavaScript language, have the function ArrayAdditionI(arr) 
//take the array of numbers stored in arr and return the string true 
//if any combination of numbers in the array can be added up to equal the largest number in the array,
//otherwise return the string false. 
//For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
//The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function arrayAddition(arr) {

	arr.sort(function(a, b) {
		return a - b;
	})
	
	// var max = arr[0]
	// for(var i = 1; i < arr.length; i++) {
	// 	if(arr[i] > max) {
	// 		max = arr[i];
	// 	}
	// }
	var sum = 0;
	console.log(arr);

	// for(var i = arr.length-2; i > 0; i--) {
	// 	sum += arr[i];
	// 	if(sum == arr[arr.length-1]) {
	// 		return true;
	// 	}
	// }
	// return false;

	for(var i = 0; i < arr.length-1; i++) {
		sum += arr[i];
	}
	console.log(sum);

	if(sum == arr[arr.length-1]) {
		return true;
	}

	var index = 0;
	while(index < arr.length -1) {
		var newSum = sum;
		newSum -= arr[index];
		if(newSum == arr[arr.length-1]) {
			return true;
		}
		
		index++;
		console.log(newSum, index);
	}
	return false;
}

console.log(arrayAddition([4, 6, 23, 10, 1, 3]));
console.log(arrayAddition([1, 2, 3, 4]));



function ArrayAdditionI(arr) { 

  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 10);
  }
  
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  
  for (var i = 0, l = 1 << arr.length; i < l; i++) {
    var s = 0, cnt = 0;
    for (var j = 0; j < arr.length; j++) {
      if (i & (1 << j)) {
        s += arr[j];
        cnt++;
      }
    }
    
    if (cnt > 1 && s == max) {
      return true;
    }
  }
  
  // code goes here
  return false; 
            
}


function ArrayAdditionI(arr) { 

  arr.sort(function(a,b){return a - b})
  var largest = arr.pop();
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    for (var j = 0; j < arr.length; j++){
      if (i != j) {
        sum += arr[j];
        if (sum == largest) {
          return true;
        }
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        sum -= arr[k];
        if (sum == largest) {
          return true;
        }
      }
    }
    sum = 0;
  }
  // code goes here  
  return false; 
         
}





function ArrayAdditionI(arr){
    var max=arr.sort(function(a, b){return a-b}).pop();
    if(sum(arr)==max) return true;
    return removeOneLayer(arr,max);
}
function removeOneLayer(temp,max){
    if(temp.length<=0) return false;
    for(var i=0;i<temp.length;i++){
        var temp2=temp.slice(0);
        temp2.splice(i,1);
        if(sum(temp2)==max) return true;
        removeOneLayer(temp2,max);
    }
    return false;
}
function sum(arr){
    return eval(arr.join('+'));
}




function PowerSet(arr){
  var ps=[[]];
  for(var i=0;i<arr.length;i++){
    for(var j=0,len=ps.length;j<len;j++){
      ps.push(ps[j].concat(arr[i]));
    }
  }
  return ps.filter(function(el, i, arr){
     return ps[i].length>1;
  });
}

function ArrayAdditionI(arr) {
  arr = arr.sort(function(a, b){
    return a-b;
  });
  var result = arr.pop();
  arr = PowerSet(arr);
  arr = arr.map(function(a){
    return a.reduce(function(a, b){
      return a+b;
  });
  }).some(function(a){
    return a===result?true:false;
  });
  return arr;
}





function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function check(arr, max) {
  if (sum(arr) == max) return true;
  for (var i = 0; i < arr.length; i++) {
    var newArr = arr.slice(0);
    newArr.splice(i, 1);
    if (check(newArr, max)) return true;
  };
  return false;
}

function ArrayAdditionI(arr) { 

  var max = Math.max.apply(null, arr);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == max) arr.splice(i, 1);
  };

  return check(arr, max);
         
}