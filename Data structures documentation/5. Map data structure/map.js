const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  console.log(fruits)
  fruits.forEach((val, ke)=>{
    console.log(val, ke)
  })

 console.log(fruits.entries())
 console.log(fruits.keys())
 console.log(fruits.values())
 console.log(fruits.size)
 