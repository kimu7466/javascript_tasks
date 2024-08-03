/*
Square Every Digit
Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414
Notes
The function receives an integer and must return an integer.
*/

function squareDigits(num) {
    if (typeof num === "number"){
        num_arr = num.toString().split("")
        let new_arr = num_arr.map((element) => {
            return (element * element).toString()
        });
        return new_arr.join("")
    }
}

console.log(squareDigits(123)); // 149
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(2483)); // 416649
console.log(squareDigits(3212)); // 9414





