function checkPrime(a, b) {
  for (let i = a; i <= b; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) console.log(i);
  }
}

//checkPrime(1, 10);

let salaries = {
  John: 100,
  Ann: 60,
  Pete: 130,
};
// let sum =0;

// for (let salary in salaries){
//   sum += salaries[salary]
//   console.log(salary)
// }
// console.log(sum)

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiply(menu) {
  for (let item in menu) {
    console.log(typeof menu[item] === 'Number')
    if (typeof menu[item] === 'number') {
      menu[item] = menu[item]*2;
    }
  }
  return menu;
}
//console.log(multiply(menu));

console.log(new.target)
