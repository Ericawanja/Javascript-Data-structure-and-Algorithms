// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  let max = Math.max(
    A[A.length - 1] * A[A.length - 2] * A[A.length - 3],
    A[A.length - 1] * A[0] * A[1]
  );
  return max;
}
console.log(solution([-3, 1, 2, -2, 5, 6]));
