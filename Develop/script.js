//So far what I see on the starter code, generatebtn has an eventlistener for the clicking action which is pointing towards write password method.
  //write password method contains a password which contains the actual value of the password, which comes from the generatePassword.
  //But generatepassword method thats within the write password method is not defined so we need to create a function for what happens when the red button is clicked. 


//Arrays
var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var symbol= ['!','~','`','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}','\\','|',';',':','\'','"',',','<','.','>','/','?'];
var passwordlength =[];
var passwordText=[];



// Assignment Code
var generateBtn = document.querySelector("#generate");   //This is the red generate button

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Need to set up a function for generatePassword due to console message stating undefined.
function generatePassword() {
console.log ("123)");
passwordlength = parseInt(prompt("Enter Number of Characters: "));

  if(passwordlength < 8 || passwordlength >128) {
    alert("Password length should be between 8 and 128");
    return;  //stops the funtion
  } else if (!passwordlength) {
    alert("Enter a password length");
    return;
  } else {
    includeUppercase = window.confirm("Include Upper Case?");
    includeLowerCase = window.confirm("Include Lower Case?");
    includeNumber = window.confirm("Include  Number?");
    includeSymbol = window.confirm("Include Symbols?");
  };
  
  //scenarios of choosing from confirms

  if (!includeUppercase && !includeLowerCase && !includeNumber && !includeSymbol) {
    choices = alert("Please chose a password criteria!");
    return;
  } else if (includeUppercase && includeLowerCase && includeNumber && includeSymbol) {
    choices = upperCase.concat(lowerCase, numbers, symbol);
  } else if (includeUppercase && includeLowerCase && includeNumber) {
    choices = upperCase.concat(lowerCase, numbers);
  } else if (includeUppercase && includeLowerCase && includeSymbol) {
    choices = upperCase.concat(lowerCase, symbol);
  } else if (includeUppercase && includeNumber && includeSymbol) {
    choices = upperCase.concat(numbers, symbol);
  } else if (includeLowerCase && includeNumber && includeSymbol) {
      choices = lowerCase.concat(numbers, symbol);
  } else if (includeUppercase && includeLowerCase) {
    choices = upperCase.concat(lowerCase);
  } else if (includeUppercase && includeSymbol) {
    choices = upperCase.concat(symbol);
  } else if (includeUppercase && includeNumber) {
    choices = upperCase.concat(numbers);
  } else if (includeLowerCase && includeNumber) {
    choices = lowerCase.concat(numbers);
  } else if (includeLowerCase && includeSymbol) {
    choices = lowerCase.concat(symbol);
  } else if (includeNumber && includeSymbol) {
    choices = numbers.concat(symbol);
  } else if (includeUppercase) {
    choices = upperCase;
  } else if (includeLowerCase) {
    choices = lowerCase;
  } else if (includeNumber) {
    choices = numbers;
  } else if (includeSymbol) {
    choices = symbol;
  } return;

}
function passwordFunction() {
  console.log("Arriving to the passwordFunction section");
  var password = "";

for (var i=0; i<passwordlength; i++) {
  var pickPassword = choices[Math.floor(Math.random() * choices.length)];
  pickPassword = password;
  console.log(pickPassword);
}
}

//the clicking of the generate button triggers this write password functions and its sub functions to run
function writePassword() {
  var password = generatePassword();    //this function is called GenteratePassword. The value for the function will be stored under password variable. Gnerate password undefinated is the console message.
  password = passwordFunction(password);
  passwordText = document.querySelector("#password");   //the display portion of the generted password - the wite box area.

  passwordText.value = password; //displays password (from var password = generatePassword) on the screen.

}