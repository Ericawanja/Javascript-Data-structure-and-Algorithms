# 14. Longest Common Prefix Solution in javascript

```javascript
var longestCommonPrefix = function (strs) {
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
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
```
