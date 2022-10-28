function count_duplicate_characters(str) {
  let dict = { j: 3 };
  for (let i = 0; i < str.length; i++) {
    let value = str[i];

    if (Object.keys(dict).includes(str[i])) {
        dict[`${value}`] = dict[`${value}`] + 1
    } else {
      dict[`${value}`] = 1;
    }
  }
  return dict;
}

const str = `adsjfdsfsfjsdjfhacabcsbajda`;
console.log(count_duplicate_characters(str));
