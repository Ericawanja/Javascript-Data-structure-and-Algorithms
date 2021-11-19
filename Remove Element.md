# 27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

## Algorithm

## Code
```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = nums.length;
  for (let j = 0; j < nums.length; j++) {
      if(nums[j] ===val ){
           nums.splice(j, 1) 
           j--
           i = i-1
        }
  }
  return i;

};

```