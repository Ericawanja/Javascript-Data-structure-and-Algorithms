// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>a-b);
    for (let i = 0; i <A.length; i++){
        if(A[i+1] && A[i+2] ){
            let P =A[i]
            let Q = A[i + 1]
            let R = A[i + 2]
            if((P + Q)> R && (P+R)>Q && (R+Q)>P){
                console.log(P, Q, R)
                return 1;
            }
        }
    }
    return 0;
}
console.log(solution([10,2,5,1,8,20]))