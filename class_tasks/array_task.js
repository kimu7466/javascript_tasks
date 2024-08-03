// let arr = [1, 2, 3, 4, 5];
// console.log("-----------  arr----------->", arr);
// push(...items) – adds items to the end,
// arr.push(6)
// console.log("-----------  arr----------->", arr)

// pop() – extracts an item from the end,
// arr.pop()
// console.log("-----------  arr----------->", arr)

// shift() – extracts an item from the beginning,
// arr.shift()
// console.log("-----------  arr----------->", arr)

// unshift(...items) – adds items to the beginning.
// arr.unshift(0)
// arr.unshift(0, 0.5);
// console.log("-----------  arr----------->", arr);

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
// let arr2 = [1, 2, 3, 1, 4, 5, null,undefined, { a: 20 }];

// let index = arr2.indexOf(1);
// let indexLast = arr2.lastIndexOf(1);
// console.log("-----------  indexLast----------->", indexLast);
// console.log("-----------  index----------->", index);

// let index = arr2.indexOf({ a: 20 });
// let index = arr2.indexOf(undefined);
// console.log("-----------  index----------->", index);

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

// let arr2 = [1, 2, 3];
// let arr3 = arr.concat(arr2,10);
// console.log("-----------  arr3----------->", arr3)

// includes(value) – returns true if the array has value, otherwise false.

// let arr2 = [1, 2, 3, { a: 20 }];
// let available = arr.includes(10)
// let available = arr.includes(1);
// let available = arr2.includes({ a: 20 });
// console.log("-----------  available----------->", available);

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let subArr = arr.slice(2,-1)
// let subArr = arr.slice(2,4)
// console.log("-----------  subArr----------->", subArr)


// splice(index, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(1, 0, 1.5); // add
// arr.splice(1, 2); // delete
// let arr2 = [20, 30];
// arr.splice(1, 2, ...arr2); // update
// console.log("-----------  arr----------->", arr);

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
// let x = 50;
// let ans = Array.isArray(x);
// console.log("-----------  ans----------->", ans);

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// findIndex is like find, but returns the index instead of a value.

// forEach(func) – calls func for every element, does not return anything.

// map(func) – creates a new array from results of calling func for every element.

// sort(func) – sorts the array in-place, then returns it.

// reverse() – reverses the array in-place, then returns it.

// split/join – convert a string to array and back.

// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.


// ********************************************************************************************************** 
// ********************************************************************************************************** 
// ********************************************************************************************************** 
// ********************************************************************************************************** 

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// let numbers = ["a,a,a,a,a","a,a,a,a,a","a,a,a,a,a",1,23,3,2,5, 12,10, 8, 130, 44, 9, {}];
// let numbers = ["imroz","khan",2,3,4,5, {"a":"b"}];
// 
// console.log(numbers[6])
// let x = numbers.find(Element => Element <= 10 );
// console.log("🚀 ~ x:", x)

// let x = numbers.filter(ele => ele <= 10)
// console.log("🚀 ~ x:", x)

// let foundIndex = numbers.findIndex(element => typeof element == "object");
// console.log(foundIndex); // Output: 1 (index of the first element greater than 10)



// 1. find / filter

//find(func): Returns the first element that satisfies the condition defined by func.
//filter(func): Returns all elements that satisfy the condition defined by func.


// let numbers = [5, 12, 8, 130, 44];
// 
// Example of find
// let found = numbers.find(element => element > 10);
// console.log(found); // Output: 12

// Example of filter
// let filtered = numbers.filter(element => element > 10);
// console.log(filtered); // Output: [12, 130, 44]


// 2. findIndex

//findIndex(func): Returns the index of the first element that satisfies the condition defined by func.


// let numbers = [5, 12, 8, 130, 44];
// 
// let foundIndex = numbers.findIndex(element => element > 10);
// console.log(foundIndex); // Output: 1 (index of the first element greater than 10)


// 3. forEach

//forEach(func): Executes func for each element in the array. Does not return a new array.

// let numbers = [5, 12, 8, 130, 44];

// mynew = []
// numbers.forEach((element)=>{
//     mynew.push(element*2)
//     // console.log(element * 2)
// });
// console.log("🚀 ~ numbers.forEach ~ mynew:", mynew)
// 10
// 24
// 16
// 260
// 88


// 4. map

//map(func): Creates a new array with the results of calling func on every element in the array.


// let numbers = [5, 12, 8, 130, 44];

// let squre = numbers.map(element => element * 2);
// console.log(squre); // Output: [10, 24, 16, 260, 88]


// 5. sort

//sort(func): Sorts the array in-place and returns the sorted array. By default, sorts elements as strings.


let numbers = [5, 12, 8, 130, 44];

// Sort in ascending order
// let sorted = numbers.sort((a, b) => a + b);
// console.log(sorted); // Output: [5, 8, 12, 44, 130]


// 6. reverse

//reverse(): Reverses the array in-place and returns the reversed array.


// let numbers = [5, 12, 8, 130, 44];

// let reversed = numbers.reverse();
// console.log(reversed); // Output: [44, 130, 8, 12, 5]


// 7. split / join

//split: Splits a string into an array of substrings.
//join: Joins an array into a string.


// let str = "Hello, World!";

// Split the string into an array
// let strArray = str.split(" ");
// console.log(strArray); // Output: ["Hello,", "World!"]

// Join the array back into a string
// let newStr = strArray.join(" ");
// console.log(newStr); // Output: "Hello, World!"


// 8. reduce / reduceRight

//reduce(func, initial): Executes func on each element of the array (from left-to-right) to reduce it to a single value.
//reduceRight(func, initial): Similar to reduce, but works from right-to-left.


// let numbers = [5, 12, 8, 130, 44];
// 
// Sum of all elements using reduce
// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 199

// Sum of all elements using reduceRight
// let sumRight = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sumRight); // Output: 199

