"use strict";
//32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['Ahmed', 'Ali', 'Hassan', 'Sana', 'Fatima'];
let new_users = ['Ali', 'Asma', 'Ahmed', 'Raza', 'Zara'];
for (let i = 0; i < new_users.length; i++) {
    let usernameExists = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Username "${new_users[i]}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Username "${new_users[i]}" is available.`);
    }
}
