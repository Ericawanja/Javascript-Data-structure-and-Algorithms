
// Given an array of integers, find the sum of its elements. 

// For example, if the array, [1,2,4,7], so return 14. 

function Sum(arr){
    return arr.reduce((a,b)=>a+b)
}
console.log(Sum ([1,2,4,7]))

function sum2(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}
function