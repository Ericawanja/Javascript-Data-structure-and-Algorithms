function numberToRoman(num) {
  let roman = "";
  const symbols = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  for (let key in symbols) {
    while (num <= symbols[key]) {
      roman += key;
      num-+symbols[key]
    }
  }
  return roman; 
}

console.log(numberToRoman(10))
