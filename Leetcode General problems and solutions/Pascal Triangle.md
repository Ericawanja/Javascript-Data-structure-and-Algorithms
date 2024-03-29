# 118. Pascal's Triangle 

Given an integer numRows, return the first numRows of Pascal's triangle.

## Explanation
In **Pascal's triangle,** each number is the sum of the two numbers directly above it.
in every row, the array starts with 1 and ends with 1 except for the first row.

![Pascal Triangle]( "../images/pascalTriangle.jpg")

**For Example:**
Input : numRows=5;
output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

## Code
``` javascript

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [[1], [1, 1]];
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];
  if (numRows == 2) return triangle;
  else {
    for (let i = 2; i < numRows; i++) addRow(triangle);
  }
  return triangle;
};

var addRow = function (triangle) {
  let previous = triangle[triangle.length - 1];
  let newRow = [1];
  for (let i = 0; i < previous.length - 1; i++) {
    let current = previous[i];
    let next = previous[i + 1];
    newRow.push(current + next);
  }
  newRow.push(1);
  return triangle.push(newRow);
};

console.log(generate(4));

```