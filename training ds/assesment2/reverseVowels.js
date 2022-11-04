function reverseVowels(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let str_vowels = [];
  let vowel_index = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowel_index.push(i);
      str_vowels.push(s[i]);
    }
  }

  str_vowels.reverse();
  let new_stri = s;
  //   for (let i = 0; i < vowel_index.length; i++) {
  //     let s_index = vowel_index[i];
  //     let v = s[s_index];
  //     let new_v = str_vowels[i];
  //     console.log(new_v);

  //     new_stri = new_stri.replace(v, `${new_v}`);
  //     console.log(new_stri);
  //   }
  let new_stri2 = "";
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowel_index.includes(i)) {
      new_stri2 = new_stri2 + str_vowels[j];
      //console.log(new_stri2);
      j = j + 1;
    } else {
      new_stri2 = new_stri2 + s[i];
      //console.log(new_stri2);
    }
  }
  return new_stri2;
}
console.log(reverseVowels("hello"));
console.log(reverseVowels("more"));
