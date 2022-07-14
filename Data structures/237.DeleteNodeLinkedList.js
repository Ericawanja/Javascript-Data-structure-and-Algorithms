/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    if(node==0) return null;
    node.val =node.next.val;
    node.next = node.next.next;
    
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
  console.log(deleteNode(4));
  