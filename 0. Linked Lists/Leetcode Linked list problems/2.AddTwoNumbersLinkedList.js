class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let dummy = { val: 0, next: null };
  let dummyNode = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    let value1 = l1 ? parseInt(l1.val) : 0;
    let value2 = l2 ? parseInt(l2.val) : 0;
    let sumValue = (value1 + value2 + carry) % 10;
    dummyNode.next = new ListNode(sumValue);
    carry = Math.floor((value1 + value2 + carry)/10);
    l1 = l1? l1.next : null;
    l2 = l2? l2.next: null;
    dummyNode = dummyNode.next;
  }
  return dummy.next;
};

let list1 = {
  val: 2,
  next: { val: 4, next: null },
};

let list2 = {
  val: 5,
  next: { val: 6, next: { val: 4, next: null } },
};

console.log(addTwoNumbers(list1, list2));
