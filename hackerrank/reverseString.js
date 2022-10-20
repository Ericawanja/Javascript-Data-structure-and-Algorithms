function stringReverse(stri) {
  const str_arr = Array.from(stri);
  str_arr.reverse();

  return str_arr.join("");
}
console.log(stringReverse("ERICA"));
