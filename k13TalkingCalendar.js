const talkingCalendar = function(date) {
  // Your code here
  //date.slice(0,4) -> extracts year from YYYY/MM/DD
  //date.slice(5,7) -> extracts month from YYYY/MM/DD
  //date.slice(-2) -> extracts day from YYYY/MM/DD

  const findMonth = function(month) {
    switch (month) {
      case '01': return 'January';
      case '02': return 'February';
      case '03': return 'March';
      case '04': return 'April';
      case '05': return 'May';
      case '06': return 'June';
      case '07': return 'July';
      case '08': return 'August';
      case '09': return 'September';
      case '10': return 'October';
      case '11': return 'November';
      case '12': return 'December';
    }
  }
  const parseDay = function (day) {
    if (day < 10) {
      return day.slice(-1);
    }
    else {
      return day;
    }
  }
  const findDaySuffix = function(day) {
    switch (day.slice(-2,-1)) {  //if the digit in the 10s column of the date is
      case '0': case '2': case '3': //0, 2, or 3, 
      switch (day.slice(-1)) {  //if the digit in the 1s column of the date is 
        case '1': return 'st';  //1
        case '2': return 'nd';  //2
        case '3': return 'rd';  //3
        default: return 'th';   //4, 5, 6, 7, 8, 9, 0
      }
      default: return 'th';  //if the digit in the 10s column of the date is 1 (or anything else other than 0, 2, 3)
    }
  }
  return (findMonth(date.slice(5,7)) + " " + parseDay(date.slice(-2)) + findDaySuffix(date.slice(-2))  + ", " + date.slice(0,4));
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
Expected Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/