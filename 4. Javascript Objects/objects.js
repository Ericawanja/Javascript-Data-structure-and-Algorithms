
let person = {
   firstName: 'John',
   lastName: 'Doe',
   fullName: function(){
    return this.firstName + " " + this.lastName 
   }
};

console.log(person.firstName) // outputs 'John'
console.log(person ['lastNam']) //udefined

//Accessing
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

//adding objects
person.age = 16
person['building no'] = 3960
console.log(person.age)
console.log(person['building no'])

for(let x in person){
    console.log(x, '2')
}

console.log(person.fullName())
let obj={
    age:16
}
const obj2= Object.create(obj) // 
obj2['name'] = 'John'

console.log(obj2.hasOwnProperty('age'))
console.log(obj2.hasOwnProperty('name'))