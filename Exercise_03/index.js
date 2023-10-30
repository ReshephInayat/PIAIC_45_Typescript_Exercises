"use strict";
//03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let person2 = "Allah ka banda";
// Print the name in lowercase
console.log(person2.toLowerCase());
// Print the name in uppercase
console.log(person2.toUpperCase());
// Function to print the name in titlecase.
const titleCaseName = person2
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
console.log(titleCaseName);
