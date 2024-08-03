/*
Rock, Paper, Scissors

Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

Rock beats Scissors
Scissors beats Paper
Paper beats Rock

If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

Examples

rps("Rock", "Paper") ➞ "The winner is p2"

rps("Scissors", "Paper") ➞ "The winner is p1"

rps("Paper", "Paper") ➞ "It's a draw"

Notes

All inputs will be valid strings. 

*/

function rps(p1, p2){
    let r = "Rock"
    let p = "Paper"
    let s = "Scissors"

    let p1_win_combo = [[r,s],[p,r],[s,p]]
    let p2_win_combo = [[s,r],[r,p],[p,s]]
    let draw_combo = [[s,s],[r,r],[p,p]]

    let input_combo = [p1,p2]

    for (const combo of p1_win_combo) {
        if ( input_combo[0] === combo[0] &&  input_combo[1] === combo[1] ){
        return "The winner is P1"
        }
    }
    for (const combo of p2_win_combo) {
        if ( input_combo[0] === combo[0] &&  input_combo[1] === combo[1] ){
        return "The winner is P2"
        }
    }
    for (const combo of draw_combo) {
        if ( input_combo[0] === combo[0] &&  input_combo[1] === combo[1] ){
        return "This is a draw"
        }
    }
}

console.log(rps("Rock", "Paper")); // "The winner is p2"

console.log(rps("Scissors", "Paper")); // "The winner is p1"

console.log(rps("Paper", "Paper")); // "This is a draw"
