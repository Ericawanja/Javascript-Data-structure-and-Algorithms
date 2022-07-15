/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let stack = [];
  let curr = head;
  let ptr=head;
  
  while (curr) {
    stack.push(curr.val);
    curr = curr.next;
}
  while(head){
    let node = stack.pop();
    if(head.val != node){
      return false;
    }else{
      head =head.next
    }
  }
  return true;
};
let list1 = {
  val: 1,
  next: { val: 3,
          next: { val: 1, 
            next: null } } }
    
  
console.log(isPalindrome(list1));
