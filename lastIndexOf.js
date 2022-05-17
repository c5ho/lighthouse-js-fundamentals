/*function lastIndexOf (array, value) {
  let index = -1;
 // let found = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
  //    found = true;
      index = i;
    }
 //   else if (!found) {  //do not need else, if not found default index to -i
 //     index = -1;
 //   }
  }
  return index;
}*/

function lastIndexOf (array, value) {
  let index = -1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      index = i;
      break;  //as soon as value is found, exit loop
    }
  }
  return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([ 2, 1, 4, 1, 0 ], 2), "=?", 0);