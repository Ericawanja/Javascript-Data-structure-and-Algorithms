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