# 167. Two Sum II

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

##Code

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    for (let i=0; i<=numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            const sum =numbers[i]+numbers[j]
            if( sum==target){
                let indices=[]
                indices.push(i+1,j+1)
                return indices
            } 

        }

    }
};
console.log(twoSum([2,7,11,15], 9))
```