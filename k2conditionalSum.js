const conditionalSum = function(values, condition) {
  // Your code here
  let oddSum = 0;
  let evenSum = 0;
  
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenSum += values[i];
    }
    else {
      oddSum += values[i];
    }
  }
  
  if (condition === 'even') {
    return evenSum;
  }
  else {
    return oddSum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/*
Expected Output:
6
9
144
0
*/