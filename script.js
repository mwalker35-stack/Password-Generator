// Assignment Code
var generateBtn = document.querySelector("#generate");



//added variables for strings so they can be used in random generator
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCase = "!@#$%^&*()"

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword = () => {
 let characterAmount = prompt("How long do you want your password to be? (8-128 characters)")
 if (characterAmount < 8 || characterAmount > 128) {
  alert("Please enter a length between 8-128 characters");
  return generatePassword()
} if (characterAmount > 8 && characterAmount < 128 ) {
  //confirm and promt user for selections
  var numbers = confirm(`Click 'OK" if ${characterAmount} characters correct?`);
  var UpperCase = confirm("Do you want upper case characters ok?")
  var LowerCase = confirm("Do you want lower case characters ok?")
  var specialCase = confirm("Are special characters OK?")
} 
//if no selection makes sure at least 1 selection
if (UpperCase === null && LowerCase === null && specialCase === null) {
  alert("Please select at least UpperCase or LowerCase! or specialCase")
  return generatePassword();
}
if (numbers == true) {
  var numbers = "0123456789"
}

if (UpperCase == true) {
  var UpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
}

if (UpperCase == false) {
  var UpperCase = [""]
}

if (LowerCase == true) {
  var LowerCase = ["abcdefghijklmnopqrstuvwxyz"]
} 

if (LowerCase == false) {
  var LowerCase = [""]
}

if (specialCase == true) {
  var specialCase = ["!@#$%^&*()"]
}

// loops through selected options
 var passwordCharacters = numbers + UpperCase + LowerCase + specialCase
password = ""
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    password += characterCode;
  }
return password


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
