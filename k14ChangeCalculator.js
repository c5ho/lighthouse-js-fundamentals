const calculateChange = function (total, cash) {
  // Your code here
  let change = cash - total;
  let totalChange = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0, 
    penny: 0,
  };
  
  if (change/2000 > 0) {
    totalChange.twentyDollar = Math.floor(change/2000);
    change = change - totalChange.twentyDollar*2000;
  }
  if (change/1000 > 0) {
    totalChange.tenDollar = Math.floor(change/1000);
    change = change - totalChange.tenDollar*1000;
  }
  if (change/500 > 0) {
    totalChange.fiveDollar = Math.floor(change/500);
    change = change - totalChange.fiveDollar*500;
  }
  if (change/200 > 0) {
    totalChange.twoDollar = Math.floor(change/200);
    change = change - totalChange.twoDollar*200;
  }
  if (change/100 > 0) {
    totalChange.oneDollar = Math.floor(change/100);
    change = change - totalChange.oneDollar*100;
  }
  if (change/25 > 0) {
    totalChange.quarter = Math.floor(change/25);
    change = change - totalChange.quarter*25;
  }
  if (change/10 > 0) {
    totalChange.dime = Math.floor(change/10);
    change = change - totalChange.dime*10;
  }  
  if (change/5 > 0) {
    totalChange.nickel = Math.floor(change/5);
    totalChange.penny = change - totalChange.nickel*5;
  }
  
  Object.keys(totalChange).forEach(function(key) {  //removes all empty key:value pairs that are empty
    if (totalChange[key] === 0) {
      delete totalChange[key];
    }
  });
  
  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/