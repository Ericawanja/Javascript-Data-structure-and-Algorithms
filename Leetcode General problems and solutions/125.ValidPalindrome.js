// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   let temp = [];
//   for (let i = 0; i < s.length; i++) {
//     if (
//       (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 122) ||
//       (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
//     ) {
//       temp.push(s[i].toLowerCase());
//     }
//   }
//   let reversedTemp = Array.from(temp);
//   reversedTemp.reverse();
//   for (let i = 0; i < temp.length; i++) {
//     //console.log(temp[i], reversedTemp[i])
//     if (temp[i] !== reversedTemp[i]) return false;
//   }
//   return temp;
// };
// let stri = "9A man, a plan, a canal: Panama";
// let stri2 = "0p";
// console.log(isPalindrome(stri2));
// //console.log(stri.charCodeAt(0))
function isPalindrome(s) {
  let temp = [];
  let re = /\w/i;
  for (let i = 0; i < s.length; i++) {
    let match = re.exec(s[i]);
    let special =/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    //console.log(match);
    if (match !== null && !special.test(s[i])) {
      console.log(s[i], match);
      temp.push(s[i]);
    }
  }
  let arr = Array.from(temp);
  arr.reverse(); 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() !== temp[i].toLowerCase()) {
      //console.log(arr[i], temp[i]);
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('ab_a'));
