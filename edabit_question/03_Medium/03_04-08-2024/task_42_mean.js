/*
Find the Mean of All Digits
Create a function that returns the mean of all digits.

Examples
mean(42) ➞ 3

mean(12345) ➞ 3

mean(666) ➞ 6
Notes
The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
The mean will always be an integer.
 */

function mean(number) {
    let num_str = number.toString();
    const length = num_str.length;
    let num_arr = num_str.split("")
    let sum = num_arr.reduce((a,b)=>parseInt(a)+parseInt(b));
    let result = sum / length;
    return result;
}

console.log(mean(42));      // 3
console.log(mean(12345));   // 3
console.log(mean(666));     // 6
