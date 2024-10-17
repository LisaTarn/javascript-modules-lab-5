// app.js
import multiply, { add, addAndLogUpper, subtract, multiplyMax } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log(multiply(4,5)); // Test default export
// Call the functions and log results (your choice of arguments)
console.log(subtract(5,3));
console.log(add(5, 3));  // Test your add function
console.log("Uppercase: ", toUpperCase("hello"));  // Test string manipulation
addAndLogUpper(10, 20); // Test the new function

console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray
console.log('Multiply Max: ', multiplyMax([1, 2, 3], 5)); // Test Part 8: Final Challenge