# 35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
## Algorithm
- Identify the start and endpoints of the array
- While the start point is less than he end point;

    - Calculate the middle point =  start point + (end point - start point)/2. The math.floor () method is used to trucate the value after division
    - If the value at the middle part of the array is equal to the target, return the middle point.
    - Else if the value at the midle point of the array is greater than the target asign the midpoint to the end point
    - Else i.e if the value is less than the target move the startpoint one step ahead of the middle point

- When the while condition is not satisfied retun the start point

## Code

``` javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let startPoint= 0
  let endPoint = nums.length
  while(startPoint<endPoint){
    let midPoint= startPoint + Math.floor((endPoint-startPoint)/2)
    if(nums[midPoint]===target) return midPoint
    else if(nums[midPoint] > target) endPoint = midPoint
    else startPoint = midPoint + 1
  }
  return startPoint
    
};
```
## Notes;
 The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.

 For example;
      
```javascript
        Math.floor(1.67) // returns 1
        Math.floor(-4.2) // returns -5
        Math.floor(6.2) //  returns 6
```
