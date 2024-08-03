/*
Card Counting (BlackJack)
In BlackJack, cards are counted with -1, 0, 1 values:

2, 3, 4, 5, 6 are counted as +1
7, 8, 9 are counted as 0
10, J, Q, K, A are counted as -1
Create a function that counts the number and returns it from the array of cards provided.

Examples
count([5, 9, 10, 3, "J", "A", 4, 8, 5]) ➞ 1

count(["A", "A", "K", "Q", "Q", "J"]) ➞ -6

count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7]) ➞ 5
Notes
String inputs will always be upper case.
You do not need to consider case sensitivity.
If the argument is empty, return 0.
No input other than: 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A".
 */

function count(array) {
    let posetive = [2, 3, 4, 5, 6 ];
    let zero = [7, 8, 9];
    let negative = [10, 'J', 'Q', 'K', 'A'];
    let result = 0;
    for (const i in array) {
        let ch = array[i]
        let value ;
        if (posetive.includes(ch)){
            value = 1;
        }
        else if (negative.includes(ch)){
            value = -1;
        }
        else if (zero.includes(ch)){
            value = 0;
        }
        else {
            return `invalid value in array, try only => 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"`
        }
        result += value;
    }
    return result;
}


console.log(count([5, 9, 10, 3, "J", "A", 4, 8, 5])); // 1

console.log(count(["A", "A", "K", "Q", "Q", "J"])); // -6

console.log(count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7])); // 5

