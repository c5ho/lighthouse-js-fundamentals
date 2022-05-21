const numberOfVowels = function(data) {
  // Put your solution here
  let vowel = 0;
  for (let letter = 0; letter <= data.length; letter++) {
    switch (data[letter]) {
      case 'a': case 'e': case 'i': case 'o': case 'u':
        vowel++;
    }
  }
  return vowel;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/*
Expected Output:
3
5
5
*/