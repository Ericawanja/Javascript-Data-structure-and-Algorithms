// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/**THIS WAS A QUESTION IN ONE OF MY INTERVIEWS
 
 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let multiples=[]
    for (let i=0; i<A.length; i++){
        if( A[i]!=0 && Math.abs(A[i]%11) == 0) multiples.push(A[i])
    }
    multiples.sort((a,b)=>a-b)
    return multiples[0]
}
console.log(solution([-6,-91,1011,-100,84, 0, -22,1,473]))
