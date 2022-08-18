// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set = new Set(A)
    return set.size
}
console.log(solution([1,2,3,4,3,2,1]))