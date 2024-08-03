/*
Concatenate Variable Number of Input Arrays
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
Notes
Arrays should be concatenated in order of the arguments.
 */


// method one **********************************************
function concat(...arr){
    let new_arr =[]    
    for (arr of [...arr] ){
        new_arr.push(...arr)        
    }
    return new_arr;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]) );             // [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1], [2], [3], [4], [5], [6], [7]) );     // [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1, 2], [3, 4]) );                        // [1, 2, 3, 4]
console.log(concat([4, 4, 4, 4, 4]) );                       // [4, 4, 4, 4, 4]


// method two **********************************************
function concat2(...args) {
    return args.flat();
}

// console.log(concat2([1, 2, 3], [4, 5], [6, 7]) );             // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat2([1], [2], [3], [4], [5], [6], [7]) );     // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat2([1, 2], [3, 4]) );                        // [1, 2, 3, 4]
// console.log(concat2([4, 4, 4, 4, 4]) );                       // [4, 4, 4, 4, 4]

// method 3**********************************************
function concat3(...args) {
    return [].concat(...args);
}
// console.log(concat3([1, 2, 3], [4, 5], [6, 7]) );             // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat3([1], [2], [3], [4], [5], [6], [7]) );     // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat3([1, 2], [3, 4]) );                        // [1, 2, 3, 4]
// console.log(concat3([4, 4, 4, 4, 4]) );                       // [4, 4, 4, 4, 4]