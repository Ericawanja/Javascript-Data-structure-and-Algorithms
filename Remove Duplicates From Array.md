# 26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

## Algorithm
- Loop through the array and compare every element to everyother element in the array
- if there is its replica, remove it using the splice method and decrement the length of the array
## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var k = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(i, 1);
        k = k - 1;
        i--;
      }
    }
  }
  return k;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
```
## Notes:

- The splice() method overwrites the original array and is used to add or remove an element from an array. It's first parameter specifies the index of the element to be removed, the second parameter specifies the number of items to be removed.


- Also, as we remove the elements and still increment variable i, there is a risk of skipping some elements. Thus we have implemented a decrement to the index to solve that problem.