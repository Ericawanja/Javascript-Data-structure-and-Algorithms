/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 /*var deleteDuplicates = function(head) {
    let curr = head;
    while(curr != null){
        let list = curr;

        while( list != null && list.data == curr.data){
            list =list.next;
        }
        curr.next = list;
        curr = curr.next;
    }   
    return head;
};*/

function deleteDuplicates(head){
    if(head){
    let curr = head.next;
    let prev = head;

  while(curr){
    if(prev.data == curr.data){
        prev.next = curr.next;
        curr= curr.next
    }else{
        prev= prev.next;
        curr = curr.next
    }
  }
}
  return head;

}
let list1 = {
    data: 1,
    next: { data: 1, next: { data: 2, next: null } },
  };
  console.log(deleteDuplicates(list1))