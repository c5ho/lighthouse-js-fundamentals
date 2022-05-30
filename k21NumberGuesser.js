const NumberGuesser = function() {
  let secretNum = 5//Math.floor(Math.random() * 51); //generates random number from 0 to 50
  let numOfGuesses = 0;
  let allGuesses = [];
  let guess = '';
  let prompt = require("prompt-sync")();

  do {
    console.log('\nGuess a number:')
    guess = prompt('>'); 
    
    if (allGuesses.includes(guess)) { //if number has already been guessed
      console.log('\nAlready guessed! Try again!')
      continue;
    }
    if (isNaN(guess)) {  //if guess is not a number
      console.log('\nNot a number! Try again!')
      continue;
    }

    else {
      allGuesses.push(guess);  //if number is unique, add it to an array of guesses
      numOfGuesses++;  //increment guess count
      if (guess < secretNum) {
        console.log('\nToo Low!');
      }
      else if (guess > secretNum) {
        console.log('\nToo High!');
      }
    }  
  } while (guess != secretNum) 
  console.log(`\nYou got it!  You took ${numOfGuesses} attempts!\n`);
}

NumberGuesser();