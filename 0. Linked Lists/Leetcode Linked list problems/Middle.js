head = {
  data: 29,
  next: { data: 400, 
    next: { data: 12, 
        next:{ data: 700, next:null}  } 
    },
};

let printMiddle = (head)=>{
    let slow_ptr = head;
    let fast_ptr = head;
    if(head != null){
      while(fast_ptr !==null && fast_ptr.next !== null){
        fast_ptr =fast_ptr.next.next;
        slow_ptr = slow_ptr.next;
      }
    }
    return slow_ptr.data;
  }
  console.log (printMiddle(head))