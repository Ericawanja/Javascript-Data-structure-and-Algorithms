# 66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

## Algorithm
- Loop through the array
   - If the array value is less than 9, increment it and return the array digits
   - Else, assign zero to the current array index

- Insert 1 at the beginning of the array ie unshift(1). This will be executed when all the elements are equal to 9. eg 99
- Return the array digits.


## Code

```javascript

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
     for(let i=digits.length-1; i>=0; i--){
         if(digits[i]<9){
             digits[i]++
             return digits;
         }
         digits[i]=0
     }
     digits.unshift(1)
     return digits;
    
};
console.log(plusOne([1,9,9]))
```
