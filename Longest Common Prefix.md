# 14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

source: https://leetcode.com/problems/longest-common-prefix/

## Algorithm
* Create a prefix variable and assign it to an empty string
* Loop through the first word
*  Check if the character in the first word appears in all other words
   
   1. if the character in the first word is repeated in all other words in the array add to the prefic
   2.  if not, exit executing the code and return the prefix
## Code
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (char !== strs[j][i]) return prefix     
      
    }
    prefix = prefix + char
    
  }
  return prefix
    
};
```