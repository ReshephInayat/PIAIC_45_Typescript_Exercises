//21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define a class for creating country objects
class Country {
    // Properties
    name: string;
    capital: string;
    population: number;
  
    // Constructor
    constructor(name: string, capital: string, population: number) {
      this.name = name;
      this.capital = capital;
      this.population = population;
    }
  
    // Method
    displayInfo() {
      console.log(`Country: ${this.name}`);
      console.log(`Capital: ${this.capital}`);
      console.log(`Population: ${this.population}`);
    }
  }
  
  // Create instances of country objects
  const country1 = new Country("China", "Beijing", 1444216107);
  const country2 = new Country("Germany", "Berlin", 83149300);
  const country3 = new Country("Pakistan", "Islamabad", 225199937);
  
  // Output the country objects
  country1.displayInfo();
  country2.displayInfo();
  country3.displayInfo();