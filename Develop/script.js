//So far what I see on the starter code, generatebtn has an eventlistener for the clicking action which is pointing towards write password method.
//write password method contains a password which contains the actual value of the password, which comes from the generatePassword.
//But generatepassword method thats within the write password method is not defined so we need to create a function for what happens when the red button is clicked. 


//Arrays used for random password generation
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

// Add event listener to generate button - Starter Code. Upon click action, writePassword function is read.
generateBtn.addEventListener("click", writePassword);

//Need to set up a function for generatePassword due to console message stating undefined.
function generatePassword() {
  //console.log("validating that the code is getting till here");
  passwordlength = parseInt(prompt("Please Enter the desired length for Password below: "));
  var choices = []

  //if either of the 2 scenariors are true, an alert is displayed.
  if (passwordlength < 8 || passwordlength > 128) {
    alert("The entered password length is not within boundary. The length should be atleast 8 characters and no more than 128 characters");
    return;  //stops the funtion
  } else if (!passwordlength) { //if nothing is entered in the password length field
    alert("Enter a password length");
    return;
  } else { //if correct length is entered, the below options to pick from are displayed
    var includeUppercase = window.confirm("Include Upper Case characters in random password?");
    var includeLowerCase = window.confirm("Include Lower Case characters in random passwor?");
    var includeNumber = window.confirm("Include Numbers in random passwor?");
    var includeSymbol = window.confirm("Include Symbols in random passwor?");


    //scenarios based on selections

    if (!includeUppercase && !includeLowerCase && !includeNumber && !includeSymbol) {
      choices = alert("Please select atleast 1 password criteria!");
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

    //Another way of doing the same as line 55-69
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
    var finalpassword = passwordFunction(choices)
    return finalpassword;
  }
}
//Randomizing of password based on selection
function passwordFunction(choices) {
 // console.log("Arriving to the passwordFunction section");
  var choicesPassword = "";

  for (var i = 0; i < passwordlength; i++) {
    var pickPassword = choices[Math.floor(Math.random() * choices.length)];
    choicesPassword += pickPassword // password = password + pickPassword
    console.log(pickPassword);
  }
  return choicesPassword
}

//the clicking of the generate button triggers this write password functions and its sub functions to run
function writePassword() {  //Starter Code
  var password = generatePassword();    //this function is called GenteratePassword. The value for the function will be stored under password variable. Gnerate password undefinated is the console message.

  passwordText = document.querySelector("#password");   //the display portion of the generted password - the wite box area. Starter Code

  passwordText.value = password; //displays password (from var password = generatePassword) on the screen.  Starter Code

}