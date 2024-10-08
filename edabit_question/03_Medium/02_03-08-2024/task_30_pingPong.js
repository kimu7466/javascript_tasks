/*
Ping Pong!
A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

If win equals true, end the list with Pong!.
If win equals false, end with Ping! instead.
Examples
pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]

pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]

pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
Notes
You will always return the ball (i.e. the Pongs are yours).
Player 1 serves the ball and makes Ping!.
Return an array of strings.
 */

function pingPong(array, win) {
    let new_array = [...array]
    if (win){
        for( let idx = 1; idx <= (array.length) * 2 ; idx++){
            if (idx%2!=0){
                new_array.splice(idx,0,"Pong!");   
            }
        }
    }
    else if (!win){
        for( let idx = 1; idx <= ((array.length) * 2)-2 ; idx++){
            if (idx%2!=0){
                new_array.splice(idx,0,"Pong!");   
            }
        }
    }
    return new_array;
}

console.log(pingPong(["Ping!"], true)); // ["Ping!", "Pong!"]

console.log(pingPong(["Ping!", "Ping!"], false)); // ["Ping!", "Pong!", "Ping!"]

console.log(pingPong(["Ping!", "Ping!"], true)); // [ 'Ping!', 'Pong!', 'Ping!', 'Pong!' ]

console.log(pingPong(["Ping!", "Ping!", "Ping!"], true)); // ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]