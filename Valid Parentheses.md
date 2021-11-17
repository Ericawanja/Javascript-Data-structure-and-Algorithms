# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

## Algorithm 
* Create an object containing  all opening parathesis and the key, and their closing parathesis as the value
* Create an object containing the closing parathesis and boolean value 
* A stack to push in the parathesis whn looping through
* Loop through the string containing parathesis. on each loop;
    1. if the value is on the opening parathesis object, push into the stack.
    2.  Else, remove(pop) the last value of the stack( which is the topmost) and check if it corresponds with the current value(which is a closing parathesis)
## Code
```javascript
let isValid = (str) => {

  let open = {
      '{': '}',
      '[': ']',
      '(': ')'
  };

  let closed = {
      '}': true,
      ']': true,
      ')': true
  }
    let stack = [];
  for (let i = 0; i < str.length; i++) {

      let char = str[i];

      if (open[char]) {
          stack.push(char);
      } else if (closed[char]) {
          if (open[stack.pop()] !== char) return false;
      }
  }
  return stack.length === 0;
}
```