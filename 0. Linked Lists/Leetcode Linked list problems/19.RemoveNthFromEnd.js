var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(-Infinity)
    dummyHead.next = head;
    let resultHead = dummyHead;
    let count =0;
    let tail = head;

    while(count<n){
        tail = tail.next
        count++
    }
    let removeNode = head;
    let prev = dummyHead;

    while(tail){
        tail = tail.next
        removeNode = removeNode.next;
        prev = prev.next
    }
    prev.next = removeNode.next;
    return dummyHead.next;
    
};