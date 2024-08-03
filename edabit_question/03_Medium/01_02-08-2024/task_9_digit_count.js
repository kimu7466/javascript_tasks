/*
Find Number of Digits in Number
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
Notes
Try to solve this challenge without using strings!
 */

function num_of_digits(num) {
    let digits = 0;
    num = Math.floor(num)
    console.log("🚀 ~ num_of_digits ~ num:", num)
    
    while (true){
        num = Math.floor(num/10);
        digits++;
        if (num <= 0){
            break;
        }
    }
    return digits;
}


console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));

