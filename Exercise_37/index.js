"use strict";
//37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`Creating a ${size} T-shirt with the message: "${message}"`);
}
// Calling the function with default values
make_shirt(); // Large shirt with default message
// Calling the function with different size and default message
make_shirt('Medium'); // Medium shirt with default message
// Calling the function with different size and message
make_shirt('Small', 'Python'); // Small shirt with custom message
