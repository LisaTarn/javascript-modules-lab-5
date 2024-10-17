// arrayModule.js

export function findMax(arr) { 
    arr.sort((a,b) => a-b);
    let max = arr.pop();
    return max;
 }

export function reverseArray(arr) { 
    let reverse = arr.reverse();
    return reverse;

}

