/*
Uno (Part 1)
This question is inspired by the popular Uno card game.

Write a function that takes in two arguments: (1) a player's current hand and (2) the current face-up card on the table. The function will return true if the player can make a play, or false if the player has to draw from the deck.

A player can make a play if either:

They have a card that is the same color as the face-up card.
They have a card that is the same number as the face-up card.
canPlay(["yellow 3", "yellow 7", "blue 8", "red 9", "red 2"], "red 1") => true
// Since the player has two red cards, and the face-up card is red.

canPlay(["yellow 3", "yellow 7"], "blue 7") => true
// Since the player has a 7, and the face-up card is a 7.
Examples
canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") ➞ true

canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") ➞ true

canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") ➞ false

canPlay(["yellow 3", "red 8"], "green 2") ➞ false
Notes
Return false if the player is not holding any cards (an empty array).
There are no special cards or wild cards in this deck.
 */

function canPlay(current_hand, face_up) {
    let face_up_arr = face_up.split(" ");
    let face_up_color = face_up_arr[0];
    let face_up_value = face_up_arr[1];
    
    return current_hand.some(card => {
        let card_arr = card.split(" ");
        let card_color = card_arr[0];
        let card_value = card_arr[1];
        
        return card_color === face_up_color || card_value === face_up_value;
    });
}

console.log(canPlay(["yellow 3", "yellow 7", "blue 8", "red 9", "red 2"], "red 1")); // => true

console.log(canPlay(["yellow 3", "yellow 7"], "blue 7")); // => true

console.log(canPlay(["yellow 3", "yellow 5", "red 8"], "red 2")); // ➞ true

console.log(canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5")); // ➞ true

console.log(canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4")); // ➞ false

console.log(canPlay(["yellow 3", "red 8"], "green 2")); // ➞ false
