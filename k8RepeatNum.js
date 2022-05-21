const repeatNumbers = function(data) {
  // Put your solution here
  let outputString = '';
  for (let arrayCount = 0; arrayCount < data.length; arrayCount++) {
    for (let numCount = 1; numCount <= data[arrayCount][1]; numCount++) {
      outputString += data[arrayCount][0];
    }

    if (arrayCount === data.length-1) {
      return outputString;
    }

    else {
      outputString +=  ", ";
    }      
  }
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
Expected Output
1111111111
11, 222
10101010, 343434343434, 9292
*/

