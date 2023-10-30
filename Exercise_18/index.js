"use strict";
//18: Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
// Define the array of locations
const locations = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
// Print the array in its original order
console.log("Original Order:");
console.log(locations);
// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...locations].sort());
// Show that the array is still in its original order
console.log("\nOriginal Order (Unchanged):");
console.log(locations);
// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log([...locations].sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal Order (Unchanged):");
console.log(locations);
// Reverse the order of the list
locations.reverse();
console.log("\nReversed Order:");
console.log(locations);
// Reverse the order of the list again to restore the original order
locations.reverse();
console.log("\nOriginal Order (Restored):");
console.log(locations);
// Sort the array in alphabetical order
locations.sort();
console.log("\nAlphabetical Order (Sorted):");
console.log(locations);
// Sort the array in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (Sorted):");
console.log(locations);
