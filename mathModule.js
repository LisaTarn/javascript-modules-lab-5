// mathModule.js
export function add(a, b) { return a + b };
export function subtract(a, b) { return a - b};
 export default function multiply(a, b) { return a * b};

 // mathModule.js
import { toUpperCase } from './stringModule.js';
 
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
    
};

// arrayModule.js
import { findMax } from './arrayModule.js';

export function multiplyMax (arr, c){
      const max1 = findMax(arr)
      const vname = multiply (max1, c)
      return vname
      console.log(toUpperCase(vname.toString()));
}