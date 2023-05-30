//So far what I see on the starter code, generatebtn has an eventlistener for the clicking action which is pointing towards write password method.
//write password method contains a password which contains the actual value of the password, which comes from the generatePassword.
//But generatepassword method thats within the write password method is not defined so we need to create a function for what happens when the red button is clicked. 


//Arrays
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ['!', '~', '`', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
var passwordlength = [];
var passwordText = [];

/*
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
*/

// Assignment Code - Starter Code
var generateBtn = document.querySelector("#generate");   //This is the red generate button

// Add event listener to generate button - Starter Code
generateBtn.addEventListener("click", writePassword);

//Need to set up a function for generatePassword due to console message stating undefined.
function generatePassword() {
  console.log("validating that the code is getting till here");
  passwordlength = parseInt(prompt("Enter Number of Characters: "));
  var choices = []

  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password length should be between 8 and 128");
    return;  //stops the funtion
  } else if (!passwordlength) {
    alert("Enter a password length");
    return;
  } else {
    var includeUppercase = window.confirm("Include Upper Case?");
    var includeLowerCase = window.confirm("Include Lower Case?");
    var includeNumber = window.confirm("Include  Number?");
    var includeSymbol = window.confirm("Include Symbols?");


    //scenarios of choosing from confirms

    if (!includeUppercase && !includeLowerCase && !includeNumber && !includeSymbol) {
      choices = alert("Please chose a password criteria!");
      return;
    }
    if (includeLowerCase) {
      choices = choices.concat(lowerCase)
    }
    if (includeNumber) {
      choices = choices.concat(numbers)
    }
    if (includeUppercase) {
      choices = choices.concat(upperCase)
    }
    if (includeSymbol) {
      choices = choices.concat(symbol)
    }

    /*else if (includeUppercase && includeLowerCase && includeNumber && includeSymbol) {
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
   } */
    console.log(choices)
    var password = passwordFunction(choices)
    return password;
  }
}
function passwordFunction(choices) {
  console.log("Arriving to the passwordFunction section");
  var password = "";

  for (var i = 0; i < passwordlength; i++) {
    var pickPassword = choices[Math.floor(Math.random() * choices.length)];
    password += pickPassword // password = password + pickPassword
    console.log(pickPassword);
  }
  return password
}

//the clicking of the generate button triggers this write password functions and its sub functions to run
function writePassword() {  //Starter Code
  var password = generatePassword();    //this function is called GenteratePassword. The value for the function will be stored under password variable. Gnerate password undefinated is the console message.

  passwordText = document.querySelector("#password");   //the display portion of the generted password - the wite box area. Starter Code

  passwordText.value = password; //displays password (from var password = generatePassword) on the screen.  Starter Code

}