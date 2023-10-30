"use strict";
//39: City Names: Write a function called city_country() that takes in the name of a city and its country. 
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function with different city-country pairs
console.log(city_country('Lahore', 'Pakistan')); // Lahore, Pakistan
console.log(city_country('Tokyo', 'Japan')); // Tokyo, Japan
console.log(city_country('Paris', 'France')); // Paris, France
