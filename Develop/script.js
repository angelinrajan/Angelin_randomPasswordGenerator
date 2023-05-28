// Assignment Code
var generateBtn = document.querySelector("#generate");   //This is the red generate button


var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var symbol= ['!','~','`','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}','\\','|',';',':','\'','"',',','<','.','>','/','?'];
var random='';

var keys = {
upChoice: upperCase[Math.floor(Math.random() * upperCase.length)],
loChoice: upperCase[Math.floor(Math.random() * lowerCase.length)],
numChoice: numbers[Math.floor(Math.random() * numbers.length)],
symChoice: symbol[Math.floor(Math.random() * symbol.length)]
}
console.log(keys.upChoice);
console.log(keys.loChoice);
console.log(keys.numChoice);
console.log(keys.symChoice);

//Need to set up a function for generatePassword due to console message stating undefined.
function generatePassword() {
console.log ("123)");
}
//the clicking of the generate button triggers this write password functions and its sub functions to run
function writePassword() {
  var password = generatePassword();    //this function is called GenteratePassword. The value for the function will be stored under password variable. Gnerate password undefinated is the console message.
  var passwordText = document.querySelector("#password");   //the display portion of the generted password - the wite box area. Basically displays password on the screen.

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 var passLength =20;

 for (var i=8; i<passLength; i++) {
 var TotalLength = Math.floor(Math.random()* keys.length);
 random +=keys.substring(TotalLength,TotalLength+1);
 }
  var userChoiceLength = prompt("Enter Number of Characters: ");
userChoiceLength = Number (userChoiceLength);

writePassword();
passwordText.value = password;
}
/*
var getkeys = {
upperC: function() {
   keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  console.log("upperCase Function got executed");
},
lowerC: function () {
  keys.upperCase[Math.floor(Math.random() * keys.lowerCase.length)];
  console.log("lowerCase Function got executed");
},
num: function () {
  keys.numbers[Math.floor(Math.random() * keys.numbers.length)];
  console.log("numbers Function got executed");
},
sym: function () {
  keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  console.log("upperCase Function got executed");
}
}
getkeys.upperC();
getkeys.lowerC();
getkeys.num();
getkeys.sym();

var Choice = keys


/*
var enterLength = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter Number of Characters: ");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  
password += keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
password += lowerCase[Math.floor(Math.random() * upperCase.length)];
password += numbers[Math.floor(Math.random() * upperCase.length)];
password += symbol[Math.floor(Math.random() * upperCase.length)];
  passwordText.value = password;
  /*
  var userChoice = window.prompt("Enter Number of Characters: ");
  var includeUppercase = window.confirm("Include Upper Case?");
  var includeLowerCase = window.confirm("Include Lower Case?");
  var includeNumber = window.confirm("Include  Number?");
  var includeSymbol = window.confirm("Include Symbols?");
  console.log(userChoice);
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);    //When user clicks on the red button from line 2, the write password function gets called
var userChoiceLength = window.prompt("Enter Number of Characters: ");
var includeUppercase = window.confirm("Include Upper Case?");
var includeLowerCase = window.confirm("Include Lower Case?");
var includeNumber = window.confirm("Include  Number?");
var includeSymbol = window.confirm("Include Symbols?");
//console.log(userChoice);
*/