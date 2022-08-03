# Objects in javascript

Objects are dictionary like items which are defined as a key-value pair. 

It is a reference data type. That is, object variables are assigned reference pointer that points the location storage in memory. Loosely speaking, if you modify the assigned variable(pointer) then the original value in the memory will be modified too. 

Unlike arrays, objects are unordered hence you cannot use indexes to access items. Don't worry we will discuss later how to access items.

Example of an object;

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
```
## How to create an object in JavaScript
   - Object literal

This is the easiest way to create objects in JavaScript where you define and initialize the object inside curly brackets with a key:value pair. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/21c3lcaqy8jmti6ye6p9.jpg)


The key, which is also referred to as a property name must be a string  while the value property can be of any data type.

For instance;
```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
```
The variable `person` has two properties, i.e `firstName` and `lastName`

  
  - New Object keyword

We can use the `new Object()`constructor to initialize an object.
Notice in this case, you will have to add the properties later.

```javascript
const person = new Object(); //initializing an object
person.firstName = "John"; // adding property firstName with a value of John
person.lastName = "Doe";
```

  - Object constructor

Object constructor function acts as a blueprint for creating multiple objects. The key values are passed as function parameters.
```javascript
function Student(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
//lets create student1 and student2 objects
const student1= new Student("John", "Doe", 50, "blue");
const student2 = new Student("Sally", "Rally", 48, "green");
```

  ## When should you use objects
  1. Objects are useful in storing with a key-value pair
  2. Useful in grouping values with similar characteristics together to make your code more readable.
  ## Drawbacks of JavaScript objects
  1. Object properties are unordered, hence does not support accessing items with indexes. You must know the property name.
  2. Does not support operations such as adding or removing an item at a particular position.

  ## How to access items in an object
  
  Object properties can be accessed using a dot or bracket notation.
   
   For instance:
   ```javascript
    let person = {
       firstName: 'John',
       lastName: 'Doe'
};

person.firstName // outputs 'John'
person ['lastName'] //outputs 'Doe'

//Notice that the property is passed as a string in the bracket notation.
```

If you access an unassigned property in an object it outputs `undefined` and not `null` 

```javascript
person.age //undefined
```

The dot operation can only be used if the property is a valid JavaScript identifier.

A dot operation will throw an error if the property name has a space, hyphen or if the property is dynamically determined. In such circumstances use the bracket notation.

```javascript
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};
address['building no'] //3960
```
## How to add and change properties in an object
Adding properties in objects is so simple. Access the property and assign a value to it. Let's add age and building no to our person object.

Similarly, you can change a value property by assigning it to a new value.
```javascript
let person = {
   firstName: 'John',
   lastName: 'Doe'
};

person.age = 16
person['building no'] = 3960
//change the firstName to Jane
person.firstName = 'Jane'

console.log(person.age)//16

console.log(person['building no'])//3960
```
## How to delete properties in an object
The delete operator is used to delete both the property and its value in objects.

```javascript
delete person.age 
delete person['building no']

/* Before deletion: person.age = 16, 
                   person['building no'] = 3960
after deletion, person.age = undefined
                  person['building no']= undefined
*/
```

  ## How to iterate an object
The fastest way to transverse an object is using `for..in` loop.

For instance;
```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

for(let x in person){
    console.log(x  ) // outputs all the properties
}

```
## How to check if a property exists in an object
Use the ` in` operator to check if a certain property exists in the object. It returns a boolean.
```javascript
'age' in person // true
'country' in person //false
```
similarly, the `hasOwnProperty()` method can be used to check if the property exist.
```javascript
person.hasOwnProperty('age') //true
```
## `in` vs `hasOwnProperty()`
`in` returns true if the object exists in the object even if it has been inherited from another object.

```javascript
let obj={
    age:16
}
const obj2= Object.create(obj) // 

console.log('age'in obj2) //outputs true
```

However `hasOwnProperty()` method returns true only if the property is a direct property of the object.

```javascript
let obj={
    age:16
}
const obj2= Object.create(obj) // 
obj2['name'] = 'John' //adding the name property

obj2.hasOwnProperty('age') //false
obj2.hasOwnProperty('name') //true
```
Note;`obj2.hasOwnProperty('age') ` returns false because age is not a direct property of the obj2.
## object methods
An object method, is an object property that is a function. 
```javascript
let person = {
   firstName: 'John',
   lastName: 'Doe',
   fullName: function(){
    return this.firstName + " " + this.lastName 
   }
};

console.log(person.fullName()) // John Doe
```

`this` keyword is used to refer to the object

Note: You can also pass parameters in the method

## Conclusion
Objects are a very important data-type in JavaScript since it forms a building block of many other data structures 