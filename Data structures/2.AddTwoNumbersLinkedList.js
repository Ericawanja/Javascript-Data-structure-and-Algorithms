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
    let carry=0;
    if(!l1 && !l2) return;
    if (l1=null )return l2;
    if(l2=null) returnl1
    while(ptr1 || ptr2 ){
      let value1 = ptr1.val ? parseInt(ptr1.val): 0;
      let value2 = ptr2.val ? parseInt(ptr2.val)  :0
        let sumValue = value1+ value2 + carry;
        if(sumValue>=10){
          sumValue = 0;
          carry =1;
        }else{
          carry =0;
        }
        const node= new ListNode(sumValue)
        dummyNode.next = node
        ptr1=ptr1.next;
        ptr2=ptr2.next
        dummyNode = dummyNode.next;
    }
    
    return dummy.next;
    
};

let list1 = {
    val: 2,
    next: { val: 4,
            next:  null } } 
    
    let list2 = {
        val: 5,
        next: { val: 6,
                next: { val: 4, 
                  next: null } } }
          
        
      console.log(addTwoNumbers(list1, list2));

