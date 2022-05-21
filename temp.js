const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let isFound = false;

  for (let row = 0; row < spots.length; row++){
    for (let col = 0; col < spots[0].length; col++) {
      if (spots[row][col] === 'R') {
        if (vehicle === 'motorcycle' || vehicle === 'small' || vehicle === 'regular') {
          isFound = true;
          return([col,row]);
        }
      }
      else if (spots[row][col] === 'S') {
        if (vehicle === 'motorcycle' || vehicle === 'small') {
          isFound = true;
          return([col,row]);
        }
      }        
      else if (spots[row][col] === 'M') {
        if (vehicle === 'motorcycle') {
          isFound = true;
          return([col,row]);
        }    
      }
    }    
  }
  if (!isFound) {
    return false;
  }
};


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

/*Expected Output
[4, 0]
false
[3, 1]
*/
