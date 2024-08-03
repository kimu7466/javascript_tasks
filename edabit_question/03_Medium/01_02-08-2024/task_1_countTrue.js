/*

How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).

*/
arr = [true, false, false, true, false, true, true, false, true, false, false, true, false]

function countTrue(array) {
    count = 0;
    array.forEach(element => {
        if (element === true){
            count++;
        }
    });
    return count;
}

let x = countTrue(arr)
console.log("🚀 ~ x:", x)




