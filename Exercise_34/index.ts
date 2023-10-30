//34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

for (let i = 0; i < favoritePizzas.length; i++) {
  let pizza = favoritePizzas[i];
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");