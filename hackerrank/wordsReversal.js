function reverseWords(str) {
  let arr = str.split(" ");
  let strreversed = arr.map((va) => {
    let sub_arr = va.split("").reverse();
    console.log(sub_arr)
    return sub_arr
  });

  return;
}

console.log(reverseWords("I am coding"));
