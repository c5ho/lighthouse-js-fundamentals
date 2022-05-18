/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
  name : "Calvin",
  friends: 100,
  messages: ["like", "dislike", "cool"],
  postMessage: function(message) {
      facebookProfile.messages.push(message);
  },
  deleteMessage: function() {
      facebookProfile.messages.splice(index, 1); //can delete any message, not just the last
  },
  addFriend: function(friends) {
      friends++;
  },
  removeFriend: function(friends) {
      friends--;
  }
};
