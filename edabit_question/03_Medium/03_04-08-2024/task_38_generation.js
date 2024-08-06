/*
Which Generation Are You?
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
Successfully added to collection.
*/

function generation(idx, gender){
    let result = (idx != 0 && gender == "m") ? "son" : ( idx != 0 && gender == "f") ?  "daughter" : "me!";
    let obj =   { 2:"grand ", 3:"great grand "};
    if (Math.abs(idx)>1){result = obj[Math.abs(idx)] + result};
    return result;
}


console.log(generation(3, "m"));    // great grand son
console.log(generation(3, "f"));    // great grand daughter


console.log(generation(2, "m"));    // grand son
console.log(generation(2, "f"));    // grand daughter


console.log(generation(1, "m"));    // son
console.log(generation(1, "f"));    // daughter


console.log(generation(0, "m"));    // me!
console.log(generation(0, "f"));    // me!


console.log(generation(-1, "m"));    //father
console.log(generation(-1, "f"));    //mother


console.log(generation(-2, "m"));   // grand father
console.log(generation(-2, "f"));   // grand mother


console.log(generation(-3, "m"));   // great grand father
console.log(generation(-3, "f"));   // great grand mother"









// function generation(idx, gender){
//     let generation_array = [["me!(boy)","me!(girl)"], ["son", "daughter"], ["grandson", "granddaughter"], ["great grandson", "great granddaughter"], ["great grandfather", "great grandmother"], ["grandfather", "grandmother"], ["father", "mother"]]    
//     let res_generation = [];
//     if ( parseInt(idx) >=0 ){    
//         res_generation = generation_array[idx]    
//     }
//     else if(parseInt(idx)<0){
//         res_generation = generation_array[generation_array.length + idx]    
//     }
//     let g = 0;
//     if ( gender === "f" ) {
//         g = 1;    
//     }
//     let result = res_generation[g];
//     return result;
// }


// console.log(generation(3, "m"));    // great grandson
// console.log(generation(3, "f"));    // great granddaughter


// console.log(generation(2, "m"));    // grandson
// console.log(generation(2, "f"));    // granddaughter


// console.log(generation(1, "m"));    // son
// console.log(generation(1, "f"));    // daughter


// console.log(generation(0, "m"));    // me!
// console.log(generation(0, "f"));    // me!


// console.log(generation(-1, "m"));    //father
// console.log(generation(-1, "f"));    //mother


// console.log(generation(-2, "m"));   // grandfather
// console.log(generation(-2, "f"));   // grandmother


// console.log(generation(-3, "m"));   // great grandfather
// console.log(generation(-3, "f"));   // great grandmother"


