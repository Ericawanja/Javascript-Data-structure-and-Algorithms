// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    for (let i=1; i<=len+1; i++){
    
        if(!A.includes(i)) return i;
    }
}
console.log(solution([1,2,4,5]))
