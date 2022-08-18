// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 1) return 0
    A.sort((a,b)=> a-b)

    for(let i=1; i<=A.length; i++){
        if(i != A[i-1]) {
            console.log(i, A[i])
            return 0;
        }
    }
    return 1;
    
}
console.log(solution([4,1,3,2]))
