// For this challenge you will be manipulating characters in a string based off their positions in the alphabet.
//Using the JavaScript language, have the function LetterChanges(str) 
//take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet 
//(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) 
//and finally return this modified string. 

//Input = "hello*3" Output = "Ifmmp*3"
//Input = "fun times!" Output = "gvO Ujnft!"

function letterChanges(str) {
	var arr = str.split("");
	var pattern = /[a-zA-Z]/;
	
	for(var i = 0; i < arr.length; i++) {
		if(pattern.test(arr[i])) {
			if(arr[i] == "z") arr[i] = "a";
			else if(arr[i] == "Z") arr[i] = "A";
			else arr[i] = String.fromCharCode(arr[i].charCodeAt()+1);
		}
	}

	for(var j = 0; j < arr.length; j++) {
		if(/[aeiou]/.test(arr[j])) arr[j] = arr[j].toUpperCase();
	}

	return arr.join("");
}

console.log(letterChanges("hello*3"));
console.log(letterChanges("fun times!"));

// others
function LetterChanges(str) { 

  var letters = /[a-z]/g, vowels = /[aeiou]/g;
  str = str.replace(letters, function(elt){
    if(elt == "z")
      return "a";
    else {
        var charCode = elt.charCodeAt(0);
        return String.fromCharCode(charCode+1);
    }
  });//letters are replaced with the next
  
  //now capitalize vowels
  str = str.replace(vowels, function(vowel){
    return vowel.toUpperCase();
  });
  
  return str;
         
}