// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let Leafpositions = new Array(X)
    let remainingDistance = X;
    for (let i = 1; i < A.length; i++){
        let curLeafPos = A[i]
        if(Leafpositions[curLeafPos] != 1){
            Leafpositions[curLeafPos] = 1
            remainingDistance--;
           

        }
        if(remainingDistance == 0) return i;
    } 
    
}
console.log(solution(5,[1,3,1,4,2,3,5,4]))
