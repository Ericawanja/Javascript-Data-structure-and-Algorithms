// let cars = ['benz', 'mercedez']

// for(let car in cars){
//     console.log(cars[car]);
// }
// for( let car of cars){
//     console.log(car);
// }

// const obj = {user: 1, name:'erica'}
// let {name} = obj
// console.log(name);

// Destructure company from the Object
// Using Dot Notation display the Lat

let userdetails = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

let {company: {name}}= userdetails

console.log(name);

// Using a Prompt allow user to enter numbers separated by commas the print out the sum of the numbers

let swim = { ability_swim: "swim" };
let walk = { ability_walk: "walk" };
let eat = { ability_eat: "eat" };

function Props(...args){
  return Object.assign({}, ...args)
}
let human = Props(eat,walk)
let fish = Object.assign({}, eat, swim);

//console.log(human);

