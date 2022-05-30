const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let foundA = false;
  let foundB = false;
  for (let recipe of recipes) {  //for each recipe in the array of recipes
    for (let ingredient of bakeryA) { //check each recipe in bakeryA to see if it's available
      if (recipe.ingredients.includes(ingredient)) {
        foundA = true;
      }
    }
    for (let ingredient of bakeryB) {  //check each recipe in bakeryB to see if it's available
      if (recipe.ingredients.includes(ingredient)) {
        foundB = true;
      }
    }
    if (foundB && foundA) { //if ingredients are found in both unique bakeries, then return recipe name
      return recipe.name;
    } 
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef'] 
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

/*
Expected Output:
Persian Cheesecake
Nima's Fmous Dijon Raisins
*/
