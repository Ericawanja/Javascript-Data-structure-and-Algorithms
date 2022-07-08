function deleteDuplicates(head) {
  if (head) {
    let dummy = { data: 0, next: head };

    let prev = dummy;
    let curr = dummy.next;
    let next = curr.next;

    while (curr) {
      if (curr && next && curr.data === next.data) {
        while ( curr.data === next.data) {
          next = next.next;
        }

        prev.next = next;
        curr = next;
        next = next ? next.next : null;
      } else {
        prev = curr;
        curr = next;
        next = next ? next.next : null;
      }
    }
    return dummy;
  }

  return head;
}
let list1 = {
  data: 1,
  next:{ data: 3, next: { data: 3, next:{ data: 4, next: { data: 4, next: { data: 5, next: null } } }}},
};
console.log(deleteDuplicates(list1));
