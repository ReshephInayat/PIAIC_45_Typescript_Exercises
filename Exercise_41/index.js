"use strict";
//41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Create an array of magician's names
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the show_magicians() function and pass the array
show_magicians(magicians);
