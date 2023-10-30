//45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, modelName: string, ...args: Array<{ key: string, value: any }>): Car {
    const car: Car = {
      manufacturer,
      modelName,
    };
  
    for (const arg of args) {
      car[arg.key] = arg.value;
    }
  
    return car;
  }
  
  // Example usage
  const car = createCar('Toyota', 'Camry', { key: 'color', value: 'blue' }, { key: 'optionalFeature', value: 'sunroof' });
  
  console.log(car);
  
  