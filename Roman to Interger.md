# 13. Roman to Interger

 Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

# Solution
## Algorithm
* Loop through each character in the string containing the roman numerals.

* Compare the value of the current roman symbol with the value of the roman symbol to its right.

  1. If the current value is greater than or equal to the value of the symbol to the right, add the current symbol’s value to the total.
   2. If the current value is smaller than the value of the symbol to the right, subtract the current symbol’s value from the total.

## Code
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let current_value = symbols[s[i]];
    let next_value = symbols[s[i+1]];

    if (current_value < next_value) {
      result += next_value - current_value;
      
      i++;
    } else {
      result += current_value;
    }
  }
  return result
};
```

