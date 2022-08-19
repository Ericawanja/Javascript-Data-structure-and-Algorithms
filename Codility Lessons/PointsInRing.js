// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/**THIS WAS A QUESTION IN ONE OF MY INTERVIEWS
 
 */

function solution(inner, outer, points_x, points_y) {
    // write your code in JavaScript (Node.js 8.9.4)
    let points = 0;

    for (let i=0; i<points_x.length; i++){
        let radius = Math.sqrt(points_x[i]*points_x[i] + points_y[i]* points_y[i]);
        if  (radius >inner && radius <outer) {
             points = points + 1;
             
        }
    }
    return points;
}
console.log(solution(2,4,[4,0,1,-2], [-4,4,3,0]))