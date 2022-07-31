class Node {
  constructor(val, next = null) {
    this.data = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Insert First Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++
  }
  // insert last Node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty makethe head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++
  }
  // Insert at index
  insertatIndex(data, index) {
    if (index < 0 || index > this.size) { // Checking if the index is less than zero or greater than the size 

      return;
    }
    //inserting at the first position. You can resue the insertFirst()
    if(index == 0){
      this.head = new Node(data, this.head)
        console.log( this.head)
        return;
    }
    const node = new Node(data); // creating the node using the Node class
    let current, previous; // 

    //set current to first
    current= this.head;
    let count = 0;
    //looping through untill you get to the index 
    while(count< index){
        previous = current;
        count++;
        current = current.next;

    }
    node.next = current;
    previous.next = node;
    this.size++
  }

  // Get at index
  getAt(index){
    let current = this.head;
    let count=0;
    while(current){
        if(count == index){
            console.log(current.data)
        }
        count++;
        current= current.next;
      
    }
    return null;
  }
  // Remove at Index
  removeAtIndex(index){
    if (index < 0 || index > this.size){
      return
    }
    let count=0;
    let previous, current;
    current = this.head;
    if (index === 0) {
      this.head = current.next;
    }else{
    while(count < index){
      previous = current;
      current = current.next; 
      count++     
    }
    previous.next = current.next;
    this.size--;
    return;
  }
}
  // clear List
  clearList(){
    this.head = null;
    this.size = 0;
  }
  // print list data
  printList() {
    while (this.head) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
 
}
const ll = new LinkedList();
ll.insertFirst(400);  
ll.insertFirst(29);
ll.insertFirst(300);

//ll.insertLast(12);
ll.insertatIndex(23, 1)
//ll.insertatIndex(24,1)
console.log(ll)
ll.removeAtIndex(1)
console.log(ll)
//ll.printList();
//ll.getAt(0)
