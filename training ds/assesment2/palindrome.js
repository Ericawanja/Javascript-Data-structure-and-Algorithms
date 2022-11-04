function isPalindrome(int) {
  let stri = String(int);
  let arr = Array.from(stri).reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== stri[i]) return false;
  }
  return true;
}
console.log(isPalindrome(1991));
