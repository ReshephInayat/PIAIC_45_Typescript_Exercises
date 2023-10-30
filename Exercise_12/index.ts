//12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


const names: string[] = ["Mahad Riaz", "Abdul Wahab", "Talha"];
const message: string = "Hello, {name}! Hope you're doing well.";

// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
  const personalizedMessage: string = message.replace("{name}", names[i]);
  console.log(personalizedMessage);
}