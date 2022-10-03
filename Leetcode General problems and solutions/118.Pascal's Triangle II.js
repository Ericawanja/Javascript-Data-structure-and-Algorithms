/**
 * 
 * @param {number} rowIndex 
 * @return {number[]}
 */

var generate = function(rowIndex){
  let triangle = [[1], [1,1]];
  if (rowIndex == 0) return [[1]]
  if (rowIndex == 1) return [1,1];
  else{
    for(let i = 2; i<rowIndex + 1; i++) addRow(triangle);
  }
  console.log(triangle)
  return triangle[triangle.length -1];
}

let addRow = (triangle)=>{
    let prevTriangle = triangle[triangle.length-1];
    let newRow = [1];

    for(let i =0; i< prevTriangle.length -1; i++){
        let curr = prevTriangle[i];
        let next= prevTriangle[i+1];
        newRow.push(curr + next)
    }
    newRow.push(1)
    return triangle.push(newRow)

}
console.log(generate(1))