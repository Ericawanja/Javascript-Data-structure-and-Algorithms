// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let partSum =0;
    let sum = A.reduce((x,y)=> x + y)
    let diff, rem;
    let diffArr =[]
    for (let i=0; i<A.length-1; i++){
        partSum = partSum + A[i]
        rem = sum - partSum;
        diff = Math.abs(rem -partSum);
        diffArr.push(diff)
    }
    diffArr.sort((a,b)=> a-b)
    return diffArr[0]
}
console.log(solution([3,1,2,4,3]))