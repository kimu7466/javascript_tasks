/*
Numbered Cards
You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

Examples
winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true
// Your cards can make the number 96
// Your opponent can make the number 73
// You win the round since 96 > 73

winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true

winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]) ➞ false

winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]) ➞ false
Notes
Return false if you and your opponent reach the same maximum number (see example #4).
 */

function winRound(player1, player2) {
    player1.sort((a, b) => b - a);
    player2.sort((a, b) => b - a);
    
    let player1Number = player1[0] * 10 + player1[1];
    let player2Number = player2[0] * 10 + player2[1];
    
    return player1Number > player2Number;
  }
  
  console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])); // true
  console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5])); // false
  console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1])); // false
  console.log(winRound([4, 9, 4, 4, 5], [3, 8, 5, 4, 1])); // true
  



