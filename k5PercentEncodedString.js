const urlEncode = function(text) {
  // Put your solution here
  let trimmed = '';
  let encoded = '';
  
  //this loop removes leading spaces
  while (text[0] === ' ') {
    trimmed = text.slice(1,text.length);
    text = trimmed;
  }
  
  //this loop removes trailing spaces
  while (text[text.length-1] === ' ') {
    trimmed = text.slice(0,text.length-1);
    text = trimmed;
  }

  for (let char of text) {
    if (char === " ") {
      encoded += '%20';
    } else {
      encoded += char;
    }
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*
Expected Output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/