// Import the subtract and sum functions from the math module
import { subtract, sum } from "./math/math.js";

// Extract the command line arguments and parse them as floating-point numbers
let [a, b] = process.argv.slice(2);
let num1 = parseFloat(a);
let num2 = parseFloat(b);


console.log("The Sum of 2 numbers is", sum(num1, num2));                // Log the sum of the two numbers
console.log("The difference of 2 numbers is", subtract(num1, num2));    // Log the difference between the two numbers