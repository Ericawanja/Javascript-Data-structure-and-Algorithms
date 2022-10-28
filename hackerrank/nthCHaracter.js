function myfunc(a, n) {
  return a[n - 1];
}
//console.log(myfunc('ERICA', 2))

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
  let slice = a.slice(0, 3);
  return slice;
}
//console.log(myFunction('ERICA'))

let firstName = "John";
let lastName = "Doe perosn an";

let text = `Welcome ${firstName}, ${lastName}!`;
//console.log(lastName.lastIndexOf('an'))

// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
function myFunction1(a, b) {
  let filtered = a.filter((t) => t != b);
  return filtered;
}
//console.log(myFunction1([false,'2',1], 1));

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction3(arr) {
  let total = arr.reduce((acc, val) => acc + val);
  let av = total / 2;
  return av;
}

// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction4(a) {
  let total = a.reduce((acc, val) => acc + val);
  return total;
}

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction5(...arrays) {
  /*let all = [];
  for (let i = 0; i < arrays.length; i++) {
    all = all.concat(arrays[i]);
  }*/

  return arrays.flat();
}

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function myFunction6(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] !== arr[i + 1]) return false;
  }
  return true;
}

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction7(a, b) {
  let all = new Set(a.concat(b));

  return Array.from(all);
}

// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction8(arr) {
  /*let len = 1;
  let stri_name = "";
  for (let i = 0; i < arr.length; i++) {
    let stri_len = arr[i].length;
    if (stri_len > len) {
      len = stri_len;
      stri_name = arr[i];
    }
  }*/
  let stri = arr.reduce((prev, curr) =>
    prev.length >= curr.length ? prev : curr
  );
  return stri;
}

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function myFunction9(arr) {
  let sorted = arr.sort((x,y)=>x.b - y.b)
  return sorted;
}

console.log(myFunction9([{a:1,b:9},{a:5,b:4}]));
