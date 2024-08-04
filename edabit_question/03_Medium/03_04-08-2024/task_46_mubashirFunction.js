/*
Mubashir's Mystery Challenge
Mubashir has written a mysterious function that takes two numbers a and b and returns multiplication?. Solve the riddle of what Mubashir's function is by having a look at some of the examples below.

Examples
mubashirFunction(0, 1) ➞ 0

mubashirFunction(1, 2) ➞ 2

mubashirFunction(10, 10) ➞ 1
Notes
Check the Tests tab for more examples.
This isn't really a coding challenge, more of a fun riddle ;) */

function mubashirFunction(a,b) {
    let a_arr = a.toString().split("");
    let b_arr = b.toString().split("");

    let a_main = a_arr.reduce((a,b)=>parseInt(a)+parseInt(b))
    let b_main = b_arr.reduce((a,b)=>parseInt(a)+parseInt(b))

    let result = a_main*b_main

    return result;
}

console.log(mubashirFunction(0, 1));    // 0
console.log(mubashirFunction(1, 2));    // 2
console.log(mubashirFunction(10, 10));  // 1
console.log(mubashirFunction(5,6))      // 30
console.log(mubashirFunction(200,200))  // 4
console.log(mubashirFunction(12,34))    // 21
console.log(mubashirFunction(123,45))   // 54

