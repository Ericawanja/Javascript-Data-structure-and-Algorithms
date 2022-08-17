// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
  
    A.sort(function (a, b) {
      return a - b;
    });
  
    let count = A[0];
    let len = A.length;
    if (A[len - 1] < 1) return 1;
    for (let i = 0; i < len; i++) {
      if (A[i] == A[i + 1]) {
        continue;
      } else if (A[i] == count) {
        if (A[i + 1]) {
          count = count + 1;
        } else {
          return ++count;
        }
      } else {
        return count;
      }
    }
  }*/
//

//refactored solution
/*function solution(A) {
    let count = 0;
    A.sort((a, b)=> a-b)
    if( A[A.length -1] < 0) return 1
    for (let i = 0; i < A.length; i++ ){
        if(A[i]!= count) count++;
        if(A[i] === count) continue;
        return count;
    }
    count++
    return count;
  }*/

function solution(A) {
  let count = 0;
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      if (A[i] != count) count++;
      if (A[i] == count) continue;
      return count;
    }
  }
  count++;
  return count;
}
console.log(solution([1, 3, 6, 4, 1, 2]));
