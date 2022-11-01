const personPrototype = {
    name:'erica',
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  carl.greet(); // hello!
  console.log(carl)