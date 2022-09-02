// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter=new Array(N).fill(0)
    for (let i=0; i<A.length;i++){
        if(A[i]>=1 && A[i]<=N){
            let counterIndex= A[i]-1; // subtracting since index start from 0, pos 3== index 2
            counter[counterIndex]=counter[counterIndex] + 1;
        }else{
            if(A[i]>N){
                // finding the highest value to set
                let highestCounter = Math.max.apply(null, counter)
                counter = new Array(N).fill(highestCounter)
            }
        }
    }
    return counter;
}
console.log(solution(1, [1]))

