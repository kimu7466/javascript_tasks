/*
Even or Odd Number of Factors
Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

Examples
factorGroup(33) ➞ "even"

factorGroup(36) ➞ "odd"

factorGroup(7) ➞ "even"
Notes
You don't need to actually calculate the factors to solve this problem.
Think about why a number would have an odd number of factors. 
*/

// function factorGroup(Number){

// }


/* note- 
        if the root of the number is integer it means it will count once only so it will make the count of facotrs odd . other than this number of factors will be even. 
    */
function factorGroup(num) {
    let root = Math.sqrt(num);
    if (Number.isInteger(root)) {
        return "odd";
    } else {
        return "even";
    }
}

console.log(factorGroup(33)); // ➞ "even"
console.log(factorGroup(36)); // ➞ "odd"
console.log(factorGroup(7));  // ➞ "even"
