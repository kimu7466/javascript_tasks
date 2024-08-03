/*
A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

Examples
isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false
Notes
The number 0 should return true (even though it's not a positive number).
Check the Resources tab for more info on repdigits.
*/

function isRepdigit(digit) {
    if (digit >= 0){
        let str_digit = digit.toString()
        let is_repdigit = str_digit.split("").every(char => char === str_digit[0])

        if (is_repdigit) {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

x = isRepdigit(1111)
console.log("🚀 ~ x:", x)

x = isRepdigit(0)
console.log("🚀 ~ x:", x)

x = isRepdigit(-11)
console.log("🚀 ~ x:", x)

