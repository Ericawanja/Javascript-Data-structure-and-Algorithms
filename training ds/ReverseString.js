// Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and
//returns the transformed string.

// e.g., when S = ‘Lorem at' the output should be 'eroLta m'

// When S = ' Tempor ip' the output should be 'meT roppi' .........

function reverseString(stri) {
  let arr = stri.split("");
  let len = arr.length;
  let groupedArr = [];
  let i = 0;
  while (i < len) {
    let subStri;
    if (len - i > 4) {
      subStri = arr.slice(i, i + 4);
      groupedArr.push(subStri);

      console.log(i, subStri, "i");
      i = i + 4;
    } else {
      subStri = arr.slice(i);
      groupedArr.push(subStri);

      break;
    }
  }
  let reversedArr = groupedArr.map((t) => {
    return t.reverse().join("");
  });
  return reversedArr.join("");
}

//console.log(reverseString("Lorem at"));
function reverseString2(str) {
  let arr = str.split("");
  let len = arr.length;
  let temp = [];
  let i=0;
 
  while (i < len) {
    
    if (len - i > 4) {
      let subStri = arr.slice(i, i + 4).reverse();
      temp.push(subStri.join(''));
      console.log(subStri);
      i = i+4
    } else {
      let subStri = arr.slice(i).reverse();
      console.log(subStri, 'el');
      temp.push(subStri.join(''))
      break
    }
  }
  return temp.join('')
}
console.log(reverseString2('Tempor ip'));
