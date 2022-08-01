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
Same as objects, maps store key, value pair elements. However, the two are significantly different

<table>
<tr>
<th>Feature</th>
<th>Map</th>
<th>Objects</th>
</tr>
<tr>
<td>Keys</td>
<td> A map key can be any value. This includes objects, functions or primitives</td>
<td>Strictly, objects  key must be a string or symbol data type</td>
</tr>

<tr>
<td>Lengh</td>
<td> Map has a size property which returns the length of the map</td>
<td> The length of an object can only be determined by iterating and counting all the elements manually</td>
</tr>

<tr>
<td>Iteration</td>
<td>Directly iterable</td>
<td>You cannot iterate an  object directly. However you can do so by implementing other methods</td>
</tr>
<tr>
<td>Default keys</td>
<td>Map only contains keys that are explicitly declared. Hence, does not contain default keys</td>
<td>Since objects has a prototype, it contains default keys which can collide with other keys</td>
</tr>

</table>

## Map operations
1. add element 

`set()` method is used to add elements to a map. The set method receveives the key-value pair of the new element as a parameter.

```javascript
fruits.set("apples", 500);
```

2. get element
`get()` method receives the a key parameter of the element
```javascript
fruits.get("apples") // outputs 50
```
3. Remove element
`delete()` method deletes element from the map.
```javascript
fruits.delete("apples")
```
4. Clear Map
`clear()` method removes all the elements from a map

```javascript
fruits.clear()
```
5. Trasverse a map
`forEach()` can be used to access the items in a list sequentially
```javascript
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  fruits.forEach((key, value)=>{
    console.log(key, value)
  })
  /*
  output
  apples 500
  bananas 300
  oranges 200
  */
```
`keys()` returns an iterable list of the keys. Similarly, `values()` returns an iterable list of the values
```javascript
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
 console.log(fruits.keys())
 /*outputs
 { 'apples', 'bananas', 'oranges' }
 */
console.log(fruits.values())
/*outputs
{ 500, 300, 200 }
*/
```
`entries()` trasverses the map and returns an array of key-value pair `[key, values]`

```javascript
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
 console.log(fruits.entries())

 /*
 {
  [ 'apples', 500 ],
  [ 'bananas', 300 ],
  [ 'oranges', 200 ]
}
 */
```
6. Find size of a map
`size` property returns the length of the map

```javascript
fruits.size //outputs 3
```

## Summary
Even though objects and maps look quite similar, they are quite different. Map have size property and the keys can be anything including functions and objects.

Objects do not have size property while the keys must be stritly strings. 