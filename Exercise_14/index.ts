//14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guestList2: string[] = ["Amos Arnold ", "Aman John ", "Abel Arthur"];

// Print an invitation message to each person
guestList2.forEach((person: string) => {
  console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});

