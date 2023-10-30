//03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person2: string = "Allah ka banda";
// Print the name in lowercase
console.log(person2.toLowerCase());

// Print the name in uppercase
console.log(person2.toUpperCase());

// Function to print the name in titlecase.
const titleCaseName: string = person2
  .split(" ")
  .map((word: string) => word[0].toUpperCase() + word.substring(1).toLowerCase())
  .join(" ");

console.log(titleCaseName);