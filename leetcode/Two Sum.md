# 14. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
```javascript

function twosum(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(i===j){
                continue; 
            }
            const sum= nums[i]+nums[j];
            //console.log(sum)
            if(sum === target){
                 return [i,j]
                
             
            }
        }
    }
}

console.log(twosum([2,3,7,5,6], 8))
```
