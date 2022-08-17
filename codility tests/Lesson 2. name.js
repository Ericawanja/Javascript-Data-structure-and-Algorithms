// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let rem= A.length-K
    let copyArr = []
    for (let i=rem; i<A.length; i++){
        copyArr.push(A[i])
        //A.pop()
    }
    for (let i= 0; i< K; i++){
        A.pop()
    }
    //console.log(A, copyArr)
    return copyArr.concat(A)
}

console.log(solution(  [1,2,3,4], 4))