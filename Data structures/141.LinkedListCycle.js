/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let slow=head;
    let fast=head
    while (fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(fast === slow) return true
    }
    return false
    
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
  console.log(detectCycle(list1));
  