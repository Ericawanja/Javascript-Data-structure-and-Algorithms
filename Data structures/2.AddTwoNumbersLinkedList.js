class ListNode {
    constructor(val, next = null) {
      this.data = val;
      this.next = next;
    }
  }


 var addTwoNumbers = function(l1, l2) {
    let dummy = {val:0, next:null}
    let dummyNode=dummy;
    let ptr1 = l1;
    let ptr2 = l2;
    
    while(ptr1 !==null && ptr2 != null){
        let sumValue = parseInt(ptr1.val)+ parseInt(ptr2.val);
        const node= new ListNode(sumValue)
        dummyNode.next = node
        ptr1=ptr1.next;
        ptr2=ptr2.next
        dummyNode = dummyNode.next;
    }
    
    return dummy.next;
    
};

let list1 = {
    val: 5,
    next: { val: 3,
            next: { val: 8, 
              next: null } } 
    }
    let list2 = {
        val: 1,
        next: { val: 3,
                next: { val: 1, 
                  next: null } } }
          
        
      console.log(addTwoNumbers(list1, list2));

