const makeCase = function(input, cases) {
  // Put your solution here
  let caseType = []
  if (Array.isArray(cases)) { //if cases are an array, add to a casetype array
    for (let i of cases) {
      caseType.push(i);
    }
  }
  else {
    caseType.push(cases);  //if cases are not an array, add to casetype array
  }
  for (let numCases = 0; numCases < caseType.length; numCases++) {
    switch (caseType[numCases]) {
      case "camel": return makeCamel(input);
      case "pascal": return makePascal(input); 
      case "snake": return makeSnake(input); 
      case "kebab": return makeKebab(input); 
      case "title": return makeTitle(input); 
    }
  }
  for (let numCases = 0; numCases < caseType.length; numCases++) {
    switch (caseType[numCases]) {
      case "vowel": return makeVowel(input);
      case "consonant": return makeConsonant(input);
    }
  }
  for (let numCases = 0; numCases < caseType.length; numCases++) {
    switch (caseType[numCases]) {
      case "upper": return input.toUpperCase();//makeUpper(input);
      case "lower": return input.toLowerCase();//makeLower(input);
    }
  }    
}

function makeCamel(input) {
  let newString = '';
  for (let letter = 0; letter < input.length; letter++) {
    if (input[letter] === ' ') {
      letter++ //if a space is found, advance to the next character
      newString += input[letter].toUpperCase(); //make the character uppercase and add it to new string
    }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString;
};

function makePascal(input) {
  let newString = '';
  for (let letter = 0; letter < input.length; letter++) {
    if (input[letter] === ' ') {
      letter++ //if a space is found, advance to the next character
      newString += input[letter].toUpperCase(); //make the character uppercase and add it to new string
    }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString[0].toUpperCase()+newString.slice(1);
};

function makeSnake(input) {
  let newString = '';
  for (let letter = 0; letter < input.length; letter++) {
    if (input[letter] === ' ') {
      newString += '_'; //make the character uppercase and add it to new string
    }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString;
};

function makeKebab(input) {
  let newString = '';
  for (let letter = 0; letter < input.length; letter++) {
    if (input[letter] === ' ') {
      newString += '-'; //make the character uppercase and add it to new string
      }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString;
};

function makeTitle(input) {
  let newString = '';
  for (let letter = 0; letter < input.length; letter++) {
    if (input[letter] === ' ') {
      letter++;
      newString += ' ' + input[letter].toUpperCase(); //make the character uppercase and add it to new string
    }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString[0].toUpperCase()+newString.slice(1);
};

function makeVowel(input) {
  let newString = '';
  input = input.toLowerCase();
  for (let letter = 0; letter < input.length; letter++) {
    if (input[letter] === 'a' || input[letter] === 'e' || input[letter] === 'i' || input[letter] === 'o' || input[letter] === 'u') {
      newString += input[letter].toUpperCase(); //make the character uppercase and add it to new string
    }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString;
};

function makeConsonant(input) {
  let newString = '';
  input = input.toLowerCase();
  for (let letter = 0; letter < input.length; letter++) {
    if ((input[letter] !== 'a' && input[letter] !== 'e' && input[letter] !== 'i' && input[letter] !== 'o' && input[letter] !== 'u')) {
      newString += input[letter].toUpperCase(); //make the character uppercase and add it to new string
    }
    else {
      newString += input[letter]; //if no space is found, add character to new string
    }
  }
  return newString;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/*
Expected Output
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/