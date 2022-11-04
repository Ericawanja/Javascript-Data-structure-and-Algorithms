/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let alpha = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let title = "";
  while (columnNumber > 0) {
    let round = columnNumber % 26;
    console.log(round);
    if (round === 0) round = 26;
    title = alpha[round]
    columnNumber = (columnNumber - round) /26
  }
  return title;
};
console.log(convertToTitle(127));
