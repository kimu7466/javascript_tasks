/*

A Redundant Function
Write a function redundant that takes in a string str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
Notes
Your function should return a function, not a string.

*/

function redundant(string){
    function inner_func() {
        return string
    }
    return inner_func
}

let x = redundant("apple")
console.log("🚀 ~ x():", x())
let y = redundant("banana")
console.log("🚀 ~ y():", y())
let z = redundant("cherry")
console.log("🚀 ~ z():", z())
let blank = redundant("")
console.log("🚀 ~ blank():", blank())



