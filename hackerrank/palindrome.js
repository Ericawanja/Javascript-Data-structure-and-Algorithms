function palindrome(string) {
  let stri_array = Array.from(string);
  stri_array.reverse();

  for (let i = 0; i < string.length; i++) {
    if (string[i] != stri_array[i]) return "false";
  }
  return true;
}
console.log(palindrome("madamt"));
