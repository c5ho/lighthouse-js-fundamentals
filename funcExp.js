// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};


// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));


// An anonymous function expression stored in the variable `laugh`
var laugh = function(num) {
  var sound = "" ; 
  //Iterate
  for (var x = 0 ; x < num ; x++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
}
// It is essential that the function must return a string
console.log(laugh(3)) ;

//named function expression example:
let cry = function wah (){
  return ("boohoo!");
}

console.log(cry()); 

/*Programming Quiz: Inline Functions (5-6)
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function expression passed as the second parameter
* - Your function expression should return the expected output
*/


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
   console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions("happy", function(num) {
 var sound = "" ; 
 //Iterate
 for (var x = 0 ; x < num ; x++) {
     sound = sound + "ha" ;  
 }
 sound = sound +"!"; 
 return sound; 
});