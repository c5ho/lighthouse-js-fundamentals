function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

console.log(isThisWorking(3));

function isThisWorking2(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return 1;
}

isThisWorking2(5);
console.log(isThisWorking2(6));

function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));

var x = 1;

function addTwo() {
  x = x + 2;  //global x
}

addTwo();
x = x + 1;
console.log(x);

x = 1;

function addTwo2() {
  var x = x + 2;  //local x with only function scope
}

addTwo2();
x = x + 1;
console.log(x);