/*
Is it an Object?
Create a function to check whether the given parameter is an Object or not.

Examples
isObject(function add(x,y) {return x + y}) ➞ true

isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true

isObject(null) ➞ false

isObject("") ➞ false
Notes
Inputs may be null, primitive wrapper types, dates.
 */

function isObject(param) {
    return param !== null && (typeof param === "object" || typeof param === "function");
}

// Examples
console.log(isObject(function add(x, y) { return x + y; })); // ➞ true
console.log(isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')));   // ➞ true
console.log(isObject(null));                                 // ➞ false
console.log(isObject(""));                                   // ➞ false
console.log(isObject({}));                                   // ➞ true
console.log(isObject([]));                                   // ➞ true
console.log(isObject(new Date()));                           // ➞ true
