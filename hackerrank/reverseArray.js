function reverseArray(a) {
  let reversedArray = [];
  let length = a.length;
  for (let i = 0; i < length; i++) {
    reversedArray.push(a.pop());
  }
  return reversedArray;
}
/**
 * alternative way using reverse function
 */

/*function reverseArray() {
  return a.reverse();
}*/
console.log(reverseArray([1, 4, 3, 2]));
