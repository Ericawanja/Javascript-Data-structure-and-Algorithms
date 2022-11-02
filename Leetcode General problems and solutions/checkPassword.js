function checkPassword(p) {
  for (let i = 0; i < p.length; i++) {
    if(p[i]===p[i+1]) return false;
  }
  return true
}
console.log(checkPassword("a  bcd"));
