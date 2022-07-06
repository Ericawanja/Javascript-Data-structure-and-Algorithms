let list1 = {
  data: 1,
  next: { data: 2, next:  { data: 4, next: null } } ,
};
let list2 = {
  data: 1,
  next: { data: 3, next: { data: 5, next: null } } ,
};

var mergeTwoLists = function (list1, list2) {
  let dummyNode = { data: 0, next: null };
  let head = dummyNode;
  while (true) {
    if (list1 == null) {
      head.next = list2;
      break;
    } if (list2 == null) {
      head.next = list1;
      break;
    } 
      if (list1.data <= list2.data) {
        head.next = list1;
        list1 = list1.next;
        console.log(head.next.data, '1');
      } else {
        head.next = list2;
        list2 = list2.next;
        console.log(head.next.data, 'b');
      }
      head = head.next;
    }
    console.log(dummyNode.next)
    return dummyNode.next;
  
};
console.log(mergeTwoLists(list1, list2));
