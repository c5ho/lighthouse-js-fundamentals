function laugh(num) {
  for (let count = 1; count <= num; count++) {
  phrase = phrase + "ha";
  }
  phrase = phrase + "!";
  return(phrase);
}

let phrase = '';
console.log(laugh(3));