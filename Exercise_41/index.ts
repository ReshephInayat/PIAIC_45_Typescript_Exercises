//41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    magicians.forEach((magician: string) => {
      console.log(magician);
    });
  }
  
  // Create an array of magician's names
  const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  // Call the show_magicians() function and pass the array
  show_magicians(magicians);
  