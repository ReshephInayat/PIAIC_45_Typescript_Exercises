//16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList: string[] =  ["Amos Arnold ", "Aman John ", "Abel Arthur"];

// Print the original guest list
console.log("Original Guest List:");
guestList.forEach((person: string) => {
  console.log(person);
});

// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add new guests to the guest list
guestList.unshift("Mahad Riaz"); // Add at the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, "Abdul Wahab"); // Add in the middle
guestList.push("Talha"); // Add at the end

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach((person: string) => {
  console.log(person);
});

// Print new invitation messages for each person
console.log("\nNew Invitation Messages:");
guestList.forEach((person: string) => {
  console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});