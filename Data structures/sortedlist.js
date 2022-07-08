let list1 = {
  data: 1,
  next: { data: 2, next: { data: 4, next: null } },
};
let list2 = {
  data: 1,
  next: { data: 3, next: { data: 5, next: null } },
};

var mergeTwoLists = function (list1, list2) {
  let dummyNode = { data: 0, next: null };
  let prev = dummyNode;
  while (list1 && list2) {
    if (list1.data <= list2.data) {
      prev.next = list1;
      prev = list1
      list1 = list1.next;
      
      
    } else {
      prev.next = list2;
      prev = list2
      list2 = list2.next;
      
    }
  }
  if (!list1)  prev.next = list2;

  if (!list2)  prev.next = list1;


  return dummyNode.next;
};
console.log(mergeTwoLists(list1, list2));
