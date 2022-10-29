function stringReverse(stri) {
  const str_arr = Array.from(stri);
  str_arr.reverse();

  return str_arr.join("");
}
console.log(stringReverse("ERICA"));

var plusOne = function(digits) {
  for(let i=digits.length-1; i>=0; i--){
      if(digits[i]<9){
          digits[i]++
          return digits;
      }
      digits[i]=0
  }
  digits.unshift(1)
  return digits;
 
};
console.log(plusOne([1,9,9]))