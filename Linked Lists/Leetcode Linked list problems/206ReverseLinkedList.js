var reverseList = function(head) {
    let previous= null;
    let current = head;
    let next;
    while(current){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        

    }
    return previous
    
};
let list1 = {
    val: 1,
    next: {
      val: 3,
      next: {
        data: 3,
        next: { val: 4, next: { val: 3, next: { val: 3, next: null } } },
      },
    },
  };
  console.log(reverseList(list1));
  