/*
 Codility MaxCounter Problem in Javascript
 You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
 */
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

