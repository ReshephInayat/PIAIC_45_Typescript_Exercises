//44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items: string[]): void {
    // "..." is the  rest parameter here that can accept many numbers of inputs.
    console.log("Sandwich Order Summary:");
    console.log("Items: " + items.join(", "));
    console.log("Total items: " + items.length);
    console.log("---------------------------");
  }
  
  orderSandwich("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
  orderSandwich("Bread", "Turkey", "Mayonnaise");
  orderSandwich("Bread", "Peanut Butter", "Jelly");
  