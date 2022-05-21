const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestNameLength = instructors[0].name.length;
  let longestNameInstructor = '';
  for (let instructorCount = 0; instructorCount < instructors.length; instructorCount++) {
    if (instructors[instructorCount].name.length > longestNameLength) {
      longestNameLength = instructors[instructorCount].name.length;
      longestNameInstructor = instructors[instructorCount]
    }
  }
  return longestNameInstructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

/*
Expected Output:
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/