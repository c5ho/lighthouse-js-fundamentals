const squareCode = function(message) {
  // Put your solution here
  message = message.replace(/\s/g, '');
  let square = new Array(new Array());
  let numCols = Math.ceil(Math.sqrt(message.length));
  let numRows = Math.ceil(message.length/numCols);
  let letter = 1;

  while (letter <= message.length) {
  //for (let letter = 1; letter <= message.length; letter++) {
    for (let row = 1; row <= numRows; row++) {
      for (let col = 1; col <= numCols; col++) {
        square[row][col].push([message(letter)]);
        letter++

      }
    }
  }

  //console.log (message + " " + col);
}



//console.log(squareCode("chill out"));
//console.log(squareCode("feed the dog"));
//console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*Expected Output
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau*/