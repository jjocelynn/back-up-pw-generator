// Assignment Code
let generateBtn = document.querySelector("#generate");

let writePassword = function() {
  //initializing variables
  let typeCount = 0;
  let numLowercase = 0;
  let numUppercase = 0;
  let numNumber = 0;
  let numSpecial = 0;
  let lowerList = "abcdefghijklmnpqrstuvwxyz";
  let upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberList = "1234567890";
  let specialList = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  let orderedPw = ""


  ///// Asking for user input /////
  //password length
  let userLength = prompt("Choose a password length");
  while ((userLength < 8 || userLength > 128) || (isNaN(userLength))) {
    userLength = prompt("*Must choose a length between 8 and 128");
  }
  console.log("The user chose a length of: " + userLength);

  // asking whether to include character types
  // lowercase letters
  let lowercase = confirm("would you like to include lowercase letters? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants lowercase: " + lowercase);
  if (lowercase) {  //tallying which character types are used
    typeCount++;
  }

  // uppercase letters
  let uppercase = confirm("Would you like to include uppercase letters? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants uppercase: " + uppercase);
  if (uppercase) {
    typeCount++;
  }

  // numbers
  let number = confirm("Would you like to include numbers? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants numbers: " + number);
  if (number) {
    typeCount++;
  }

  // special characters
  let special = confirm("Would you like to include special characters? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants special characters: " + special);
  if (special) {
    typeCount++;
  }

  console.log("the user has chosen " + typeCount + " different character types");

  //if the user chooses none of them, cancel and try again
  if (typeCount == 0) {
    window.alert("Sorry, you need at least one character type. Please try again.");
    return;
  }




  ///// function that will select random values based on if-statements below ///// 
  let ranChar = function (x, y) { //x is the number of charcters. y refers to the type of data.
    for (let i = 0; i < x; i++) {
      orderedPw += y.charAt(Math.floor(Math.random() * (y.length - 1)));
    }
  }

  //randomizing how many characters per "true" character type. 
  if (lowercase) { //if user has chosen yes (true) to this character type, run code.
    if (typeCount == 1) { //if user has only chosen 1 character type, 
      numLowercase = userLength; //make the number of lowercases equal to the user input length
      userLength = 0; // for the console (states how many characters are left)
    } else {
      numLowercase = Math.floor(Math.random() * (userLength - typeCount) + 1); //max length = (user inputed length - typeCount (reserves at least 1 of each type)), min lenght = 1
      userLength = userLength - numLowercase; // decrease max random length for the next character type
    }
    ranChar(numLowercase, lowerList); //^ function above (returns numLowercase number of random strings from lowercase list) 
    typeCount--; //minus one character type since the lowercase letters have been accounted for
    console.log(numLowercase + " lowercase, " + userLength + " characters left, " + typeCount + " password types left");
  }

  if (uppercase) {
    if (typeCount == 1) {
      numUppercase = userLength;
      userLength = 0;
    } else {
      numUppercase = Math.floor(Math.random() * (userLength - typeCount) + 1);
      userLength = userLength - numUppercase;
    }
    ranChar(numUppercase, upperList);
    typeCount--;
    console.log(numUppercase + " uppercase, " + userLength + " characters left, " + typeCount + " password types left");
  }

  if (number) {
    if (typeCount == 1) {
      numNumber = userLength;
      userLength = 0;
    } else {
      numNumber = Math.floor(Math.random() * (userLength - typeCount) + 1);
      userLength = userLength - numNumber;
    }
    ranChar(numNumber, numberList);
    typeCount--;
    console.log(numNumber + " numbers, " + userLength + " characters left, " + typeCount + " password types left");
  }

  if (special) {
    if (typeCount == 1) {
      numSpecial = userLength;
      userLength = 0;
    } else {
      numSpecial = Math.floor(Math.random() * (userLength - typeCount) + 1);
      userLength = userLength - numSpecial;
    }
    ranChar(numSpecial, specialList);
    typeCount--;
    console.log(numSpecial + " special characters, " + userLength + " characters left, " + typeCount + " password types left");
  }

  console.log("lowercase:" + numLowercase + " uppercase:" + numUppercase + " numbers:" + numNumber + " special characters:" + numSpecial); //for the console
  console.log("ordered password: " + orderedPw); //checking if the function on line 67 worked




  ///// shuffling the ordered password /////
  let shufflePw = orderedPw.split("");  //turning the ordered password into an array
  let a, b, c //initializing variables to let us swap indexes
  for (a = 0; a < shufflePw.length; a++) { //going through each index of the shufflePw array
    b = Math.floor(Math.random() * (shufflePw.length - 1)); //giving b a random value within the arrays index
    c = shufflePw[a]; //storing the a-th index value of the shufflePw into c
    shufflePw[a] = shufflePw[b]; // replacing the a-th value with b-th value
    shufflePw[b] = c; //putting the c value (old a) into b and repeating until we go through the whole array
  }

  let password = shufflePw.join(""); // joining the array into a string and assigning the value to password

  document.querySelector("#password").value = password; //displaying it on the screen
}


// listen if button is clicked, and run the function writePassword
generateBtn.addEventListener("click", writePassword);