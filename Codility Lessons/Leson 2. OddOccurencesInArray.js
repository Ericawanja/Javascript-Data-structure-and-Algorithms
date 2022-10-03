// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let output;
  let stack = [];
  for (let i = 0; i < A.length; i++) {
    stack.push(A[i]);

    for (let j = 0; j < A.length; j++) {
      if (j != i && A[i] == A[j]) {
        stack.pop();
      }
    }
    if (stack.length > 0) {
      output = stack[0];
      return output;
    }
  }
}
console.log(solution([9, 3, 9, 3, 7, 7, 8]));
