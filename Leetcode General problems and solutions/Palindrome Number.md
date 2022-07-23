# 9. Palindrome Number
### Given an integer x, return true if x is palindrome integer.  An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
  # Solution
```javascript /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var numarray, stri;
  let stack = [];
  stri = x.toString();
  numarray = stri.split("");
  let arr = Array.from(numarray);

  let len = numarray.length;
  for (let i = 0; i < len; i++) {
    let value = arr.pop();
    stack.push(value);
  }

  for (let i = 0; i < len; i++) {
    console.log(numarray);
    if (numarray[i] !== stack[i]) {
      return false;
    }
  }

  return true;
    
};
```
**Notes:**


-Pop() and push() methods changes the original array. Thus, we had to copy the elements of the original array '*numarray*' to a new array '*arr*'

-when copying an array in javascript, we cannot use the "=" to assign it because it assigns the reference instead of the values. Thus we have to generate a new array using Array.from()