// console.log("connected");

/**  UNIT Converter Application  (Celcieus to Fahrenheit, KG to Pounds and Feet to Centimeter) 
creating the functions using three types of function declerartion */

// Function declaration for converting Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log("Temperature in Farhenhit: " + fahrenheit);
}

//Fucntion Expression for converting Kilogram to Pounds
const kilogramToPounds = function (kilograms) {
  const pounds = kilograms * 2.205;
  console.log("Weight in pounds: " + pounds);
};

// Arrow Function for converting Feet to Centimeter
const feetToCentimeter = (feet) => {
  const centimeters = feet * 30.48;
  console.log("Length in Centimeters: " + centimeters);
};

// main Converter Function
function converter(celsius, kilograms, feet) {
  celsiusToFahrenheit(celsius);
  kilogramToPounds(kilograms);
  feetToCentimeter(feet);
}
converter = converter(12, 3, 6);
