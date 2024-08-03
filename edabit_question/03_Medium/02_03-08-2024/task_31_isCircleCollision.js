/*
Simple Circle Collision Detection
Create a function that returns true if the given circular areas are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:

Radius of the circle.
Center position on the x-axis.
Center position on the y-axis.
Examples
isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true

isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false
Notes
You can expect useable input and positive radii.
The given coordinates are the centers of the circles.
We are looking for intersecting areas, not intersection outlines.
Check the Resources tab for help.
 */

function isCircleCollision([r1,x1,y1], [r2,x2,y2]){
    let minimum_distance = r1+r2;
    let pos_dif_x = Math.abs(x1-x2);
    let pos_dif_y = Math.abs(y1-y2);
    let pos_dif = (pos_dif_x+pos_dif_y)/2;
    return minimum_distance > pos_dif;
}

console.log(isCircleCollision([10, 0, 0], [10, 10, 10])); // true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10])); // false



/* **************** my code corrected by chatgpt ****************

function isCircleCollision([r1, x1, y1], [r2, x2, y2]) {
    // Calculate the sum of the radii
    let minimum_distance = r1 + r2;
    
    // Calculate the Euclidean distance between the centers of the circles
    let pos_dif_x = x1 - x2;
    let pos_dif_y = y1 - y2;
    let distance = Math.sqrt(pos_dif_x ** 2 + pos_dif_y ** 2);      // Calculate the Euclidean distance between the centers of the circles

    
    // Return true if the distance is less than or equal to the sum of the radii
    return distance <= minimum_distance;
}

// Examples
console.log(isCircleCollision([10, 0, 0], [10, 10, 10])); // ➞ true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10]));   // ➞ false
console.log(isCircleCollision([5, 5, 5], [5, 5, 9]));     // ➞ true
console.log(isCircleCollision([5, 5, 5], [5, 15, 15]));   // ➞ false

*/




/* **************** from internet ****************
function isCircleCollision(circle1, circle2) {
  // Destructure the input arrays
  const [r1, x1, y1] = circle1;
  const [r2, x2, y2] = circle2;
  
  // Calculate the distance between the centers of the circles
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  
  // Calculate the sum of the radii
  const sumOfRadii = r1 + r2;
  
  // Return true if the distance is less than or equal to the sum of the radii
  return distance <= sumOfRadii;
}

// Examples
console.log(isCircleCollision([10, 0, 0], [10, 10, 10])); // ➞ true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10])); // ➞ false
console.log(isCircleCollision([5, 5, 5], [5, 5, 9])); // ➞ true
console.log(isCircleCollision([5, 5, 5], [5, 15, 15])); // ➞ false
*/