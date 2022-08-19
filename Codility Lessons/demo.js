function solution (A){
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
console.log(solution([1,3,6,4,1,2]))