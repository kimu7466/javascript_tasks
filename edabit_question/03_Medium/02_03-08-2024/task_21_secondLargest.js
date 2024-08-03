/*
Find the Second Largest Number
Create a function that takes an array of numbers and returns the second largest number.

Examples
secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23
Notes
There will be at least two numbers in the array.
 */

function secondLargest(arr) {
    arr.sort((a,b) => a-b).reverse()
    return arr[1]
}

console.log(secondLargest([10, 40, 30, 20, 50])); // 40
console.log(secondLargest([25, 143, 89, 13, 105])); // 105
console.log(secondLargest([54, 23, 11, 17, 10])); // 23
