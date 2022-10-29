/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  arr = Array.from(x.toString());
  let temp = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    temp.push(arr.pop());
  }
  let x_temp = temp.join("");
  console.log(typeof x, typeof +x_temp);

  return +x_temp === x;
};
//console.log(isPalindrome(-121));
function isPalindrome1(num) {
  let temp = num.toString().split("").reverse().join("");
  return +temp === num;
}
//console.log(isPalindrome1(121));

let isPalindrome3 = function (x) {
  if (x < 0) return false;

  let number = x;
  let reverse = 0;

  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10);
  }

  return x === reverse;
};
console.log(isPalindrome3(123))
console.log(parseInt(677.89))
console.log(parseFloat(66.98));
