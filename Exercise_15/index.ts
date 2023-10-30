//15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList3: string[] = ["Amos Arnold", "Aman John", "Abel Arthur"];

// Print the original guest list
console.log("Original Guest List:");
guestList3.forEach((person: string) => {
  console.log(person);
});

// Update the guest list with a new invitee
const replacementGuest: string = "Resheph Inayat";
const indexOfReplacement: number = 1; // Assuming Marie Curie is unable to attend
guestList3[indexOfReplacement] = replacementGuest;

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList3.forEach((person: string) => {
  console.log(person);
});

// Print an invitation message to each person
console.log("\nInvitation Messages:");
guestList3.forEach((person: string) => {
  console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});