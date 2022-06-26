class Node {
    constructor(val, next=null){
        this.data= val;
        this.next = next;
    }
}

class LinkedList{
    constructor (){
        this.head = null;
        this.size = 0;
    }
    //Insert First Node
    insertFirst(data){
        this.head= new Node(data)
    }
}
const ll = new LinkedList();
ll.insertFirst(400)
console.log(ll)
