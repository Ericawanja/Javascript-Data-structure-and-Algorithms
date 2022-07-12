var removeElements = function (head, val) {
  let dummy = { val: 0, next: head };
  let current = dummy.next;
  let previous = dummy;
  while (current) {
    if (current.val == val) {
      previous.next = current.next;
      current = current.next ? current.next : null;
    } else {
      previous = current;
      current = current.next ? current.next : null;
    }
  }
  return dummy.next;
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
console.log(removeElements(list1, 4));
