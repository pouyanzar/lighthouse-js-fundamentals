const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
const ingredientsLength = ingredients.length;
let item = 0
console.log("Printing ingredients with while loop:");
while(ingredientsLength > item){
  console.log(ingredients[item])
  item++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("Printing ingredients with for loop:");
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Printing ingredients with for loop in reverse:");
for(let i = ingredients.length-1; i > 0; i--){
  console.log(ingredients[i]);
}