# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

## Algorithm 

## Code
```javascript
let isValid = (str) => {
  let stack = [];

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