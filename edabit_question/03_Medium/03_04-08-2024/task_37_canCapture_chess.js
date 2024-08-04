/*The Conquering Queen
In chess, queens can move any number of squares horizontally, vertically or diagonally.

Given the location of your queen and your opponents' queen, determine whether or not you're able to capture your opponent's queen. Your location and your opponents' location are the first and second elements of the array, respectively.

Examples
canCapture(["A1", "H8"]) ➞ true
// Your queen can move diagonally to capture opponents' piece.

canCapture(["A1", "C2"]) ➞ false
// Your queen cannot reach C2 from A1 (although a knight could).

canCapture(["G3", "E5"]) ➞ true
Notes
Assume there are no blocking pieces.
 */

function canCapture(array){
    let letters = [];
    let numbers = [];
    array.forEach(block => {
        block = block.split("")
        letters.push(block[0].charCodeAt(0))
        numbers.push(parseInt(block[1]))
    }); 
    if (Math.abs(letters.reduce((a,b)=> a-b)) === Math.abs(numbers.reduce((a,b)=> a-b))){
        return true;
    }
    else{
        return false;
    }
}


console.log(canCapture(["A1", "H8"])); // true
console.log(canCapture(["A1", "C2"])); // false
console.log(canCapture(["G3", "E5"])); // true