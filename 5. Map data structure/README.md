# Maps in javascript 
Map data structure was introduced in ES6. It has a similar key-value pair syntax as the objects.

## How to create a map

You can create a map by passing an array of the key-value pairs into the `new Map` constructor
```javascript
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  console.log(fruits) 
  //  Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

```
Alternatively, you can use set() method to add elements into the map.
```javascript
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits) 
  //  Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
```
## What are the differences between a map and object
## When to use Map

## Map operations
## Conclusion 