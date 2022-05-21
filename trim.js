let phrase = '     12345     ' //5 leading spaces + '12345' + 5 trailing spaces
let encoded = '';

console.log(phrase);
console.log(phrase.length);

//this loop removes leading spaces
while (phrase[0] === ' ') {
  encoded = phrase.slice(1,phrase.length);
  phrase = encoded;
}

console.log(encoded);
console.log(encoded.length);  

//this loop removes trailing spaces
while (phrase[phrase.length-2] === ' ') {
  encoded = phrase.slice(0,phrase.length-1);
  phrase = encoded;
}


console.log(encoded);
console.log(encoded.length);  