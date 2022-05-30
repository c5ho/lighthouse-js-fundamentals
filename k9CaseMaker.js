const camelCase = function(input) {
  // Your code here
  let newString = '';
  for (let letter = 0; letter < input.length; letter++) {
    if(input[letter] === ' ') {
      letter++ //if a space is found, advance to the next character
      newString += input[letter].toUpperCase(); //make the character uppercase and add it to new string
      }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
Output
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/