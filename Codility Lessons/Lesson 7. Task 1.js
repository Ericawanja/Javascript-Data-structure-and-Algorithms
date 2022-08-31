// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
        // write your code in JavaScript (Node.js 8.9.4)
        let opening = ['(', '{', '[']
        let closing = [')', '}', ']']
        let stack = []
    for(let i=0; i<S.length; S++){
        if (opening.includes(S[i])){
            stack.push(S[i])
        }else{
            i
        }
        
    }
}
console.log(solution(S))