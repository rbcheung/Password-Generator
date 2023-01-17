
// All variables to be used.
var characters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var confirmCharacter;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;
var passwordLength;
var possibleChar = [];
var passwordArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  getPasswordOptions()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Function to generate password with user input. 
// 1. For loop over the length of the password inputted by the user. 
// 2. Random characters selected from possibleChar variable. This variable holds all possible charcters based on input from user. Math.floor and math.random used to select random item from the array.
// 3. Created new empty global array called passwordArray and used the .push method to push the data from random item variable into the passwordArray array.
// Return passwordArray.join method converts the array into a string so it can be returned in the password area box.
function generatePassword() {

  for (i = 0; i <passwordLength; i++) {
    var randomItem = possibleChar[Math.floor(Math.random() * possibleChar.length)];
//console.log(randomItem);
passwordArray.push(randomItem);
//console.log(passwordArray);
  }
return passwordArray.join("");
}

// Function to prompt user for password options
function getPasswordOptions() {

  //Prompt for password Length. ParseInt used to convert user input into an interger.
  passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  //console.log(passwordLength);

  // if password length is false, alert to "enter value". 
  // else if password length is larger than 128, alert to say "length of password must be smaller than 129". 
  // else if password is smaller than 8, alert to say "length must be larger than 8".
  // else, confirm whether it will contain certain criteria. Confirms stored as variables so they can be used again further down.
  if (!passwordLength) {
    alert("Please enter a value");
  } else if (passwordLength > 128) {
    alert("The length of your password must be smaller than 129 characters long");
  } else if (passwordLength < 8) {
    alert("The length of your password must be greater than 8");
  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  }

  // if statement for when no criteria is selected.

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    possibleChar = confirm("Please choose a criteria!");
  }
  // If all choices selected. concat to add strings together.
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    //console.log(possibleChar);

    possibleChar = characters.concat(numbers, upperCasedCharacters, lowerCasedCharacters);
  }
  //These are the different combinations for 3 choices selected. concat to add strings together for whatever options are confirmed.
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    possibleChar = characters.concat(numbers, upperCasedCharacters);

  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    possibleChar = characters.concat(numbers, lowerCasedCharacters);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    possibleChar = numbers.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  // These are the different combinations for 2 choices selected. concat to add strings together for whatever options are confirmed.
  else if (confirmCharacter && confirmLowercase) {
    possibleChar = characters.concat(lowerCasedCharacters);
  }
  else if (confirmCharacter && confirmUppercase) {
    possibleChar = characters.concat(upperCasedCharacters);
  }
  else if (confirmCharacter && confirmNumber) {
    possibleChar = characters.concat(numbers);
  }
  else if (confirmNumber && confirmLowercase) {
    possibleChar = numbers.concat(lowerCasedCharacters);
  }
  else if (confirmNumber && confirmUppercase) {
    possibleChar = numbers.concat(upperCasedCharacters);
  }
  // These are the different combinations for 1 choice selected.
  else if (confirmCharacter) {
    possibleChar = characters;
  }
  else if (confirmNumber) {
    possibleChar = numbers;
  }
  else if (confirmLowercase) {
    possibleChar = lowerCasedCharacters;
  }
  else if (confirmUppercase) {
    possibleChar = upperCasedCharacters;
  }
}