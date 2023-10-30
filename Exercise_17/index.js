"use strict";
//17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList4 = ["Amos Arnold ", "Aman John ", "Abel Arthur"];
// Print the original guest list
console.log("Original Guest List:");
guestList4.forEach((person) => {
    console.log(person);
});
// Inform about inviting only two people
console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestList4.length > 2) {
    const removedGuest = guestList4.pop();
    console.log(`Sorry, ${removedGuest}, we are unable to invite you to dinner.`);
}
// Print messages to the remaining two people on the list
console.log(`\nDear ${guestList4[0]}, you're still invited to dinner. Please join us for an evening of great conversation and delightful food.`);
console.log(`Dear ${guestList4[1]}, you're still invited to dinner. Please join us for an evening of great conversation and delightful food.`);
// Clear the guest list
guestList4 = [];
// Print the empty guest list
console.log("\nUpdated Guest List:");
guestList4.forEach((person) => {
    console.log(person);
});
