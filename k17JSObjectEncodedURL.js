const urlDecode = function(text) {
  // Put your solution here
  text = text.replace(/%20/g, ' ')  //replace all %20 with space
  let textObj = {};
  let objArray = text.split('&');  //split objects in text by '&' and put it in an array of objects
 // console.log(objArray);
  for (let obj = 0; obj < objArray.length; obj++) {  //for each object in the array, split the key:value pairs by '='
    objArray[obj] = objArray[obj].split('=');
    for (let j = 0; j < objArray[obj].length; j++) {
    
   //console.log(objArray[obj][0]);
  // console.log(objArray[obj][j]);

   // if (!('objArray[obj][0]' in textObj)) {
   console.log(objArray[obj][0]) 
   console.log(objArray[obj][j])  
 
   textObj[objArray[obj][0]] = objArray[obj][j];
    //}
  }    
  
}

    
//console.log(objArray);
//console.log(textObj);

//return textObj;
};





/*
const urlDecode = function(text) {
  let newObj = {};
  let newArr = text.split('&');
  console.log
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].split('=');
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = newArr[i][j].split('%20').join(' ');
      if (!('newArr[i][0]' in newObj)) {
        newObj[newArr[i][0]] = newArr[i][j];
      }
    }
  }
  console.log(newArr);
  //return newObj;
};*/

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
//console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);



/*
Expected Output
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"

city=Vancouver&weather=lots%20of%20rain

Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

*/


