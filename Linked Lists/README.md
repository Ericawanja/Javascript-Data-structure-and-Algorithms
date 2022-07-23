 # Linked Lists
Linked list is a linear data structure were the items, commonly referred to as nodes, have links to other items.
The are three types of linked lists, namely single linked list, doublty linked lists and circular linked list.

In this article we will be looking at singly linked list.

An item in singly linked list has two main parts. The first part 
holds the data value while the other parts contains a linke to the next item. However, the last item has nothing to point to thus its next value is null. 

![src:https://www.geeksforgeeks.org/data-structures/linked-list/](./images/Linkedlist.png)

## Why and when to use the Linked lists
 - Easy insertion
 
 Inserting an element in array is quite expensive because you will have to shift all other items. similarly, deleting an element in array, will leave holes or else you will have to shift the positions of the elements after the removed element.

 However when using the Linked List you can easily transverse the list and insert the node at the required position.
## Drawbacks of linked lists

1. Does not support random access of elements. Thus, you will have to transverse through the list sequentially from the first element. This can be quite time consuming especially on the worst case.
 ## How to create a linked list

As you might have noted from the above diagram, every item in the linked list has the data part and link to the next value.
 Below is a code template for a node (data item) in linked list.
 ```javascript
 class Node {
  constructor(val, next = null) {
    this.data = val;
    this.next = next;
  }
}
 ```
 Next, let us initialize a linked list. 
 Note, that the head will have a null value  and a size of zero because we have not yet added any items yet.
 ```javascript
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
  //methods
}
 ```
 
 ## 1. Insert Node at the first position (head)
 ```javascript
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++
  }
 ```
 ## 2. Insert Node at the Last position (Tail)
 
 ```javascript
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty make the node the head
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
 ```
 ## 3. Insert Node at index

The first thing to do when working with an index, is to check if the index is valid. That is not less than zero or greater than the size of the list.

If the index is equal to zero, the node is to be made the head.

Else, we will transverse the list checking if the pos is less than the index using two pointers.
The previous item refers to the element just before the position to insert the node while the current points to the node on the position we want to add the node.

When the loop terminates, the next property of the previous item will point to the node to be added `previous.next = node` and the next item of the node will point to the current item, `node.next = current`

 ```javascript
   insertatIndex(data, index) {
    if (index < 0 || index > this.size) { // Checking if the index is valid. That is, less than zero or greater than the size 

      return;
    }
    //inserting at the first position. You can resue the insertFirst()
    if(index == 0){
      this.head = new Node(data, this.head) //making the new node the head and the next value, the previous head
        console.log( this.head)
        return;
    }
    const node = new Node(data); // creating the node using the Node class
    let current, previous; // 

    //set current to first
    current= this.head;
    let pos = 0;
    //looping through untill you get to the index 
    while(pos < index){
        previous = current;
        pos++;
        current = current.next;

    }
    node.next = current;
    previous.next = node;
    this.size++
  }
 ````
 ## 4. Get Node at index

To get an element at a particular index in linked list, loop through the list checking if the current position is equal to the index.

If the position value is equal to the index, output its data value.

Else, increment the position, and move the pointer to the next item.

 ```javascript
 getAt(index){
    let current = this.head;
    let pos=0;
    while(current){ // the loop terminates if the currenmt value (this.head) is null
        if(pos == index){
            console.log(current.data)
        }
        pos++;
        current= current.next; // moving the pointer to the next value
      
    }
    return null;
  }
 ```
 ## 5. Remove node at index
 First, check if the index is valid. That is, it is not less than zero or greater than the size if you know the size.

 If the head is  eqaul to zero, then you should remove the first value by moving the head pointer to the `head.next`
 
Next, transverse through the list to find the node with the link to the node to be deleted (previous) and the element after the node to be deleted (current next).
Note the node to be removed is the current value in the loop whose position is equal to the index.

To remove the element the next property of the previous should point to the next element after the item to be deleted. That is `previous.next = current.next`

 ```javascript
 removeAtIndex(index){
    if (index < 0 || index > this.size){ //checking if the index is valid
      return
    }
    let count=0;
    let previous, current;
    current = this.head;
    if (index === 0) { // Deleting from beginning 
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
 ````
 ## 6. Clear List

 An empty linked list has the head value as null. Hence to clear the list you need to point the head value to null. 

 ```javascript
 clearList(){
    this.head = null;
    this.size = 0;
  }
 ```
 ## 7. Transverse a linked list
 we transverse through a linked list using the head pointer. Remember that the head pointer refres to the first node. 

On the while loop, we will check that head is not equal to null. That is, the list is not empty or we have not exhausted looping through the list.

In the loop we will print head.data ( remember that a node is an object) and then move the pointer to the next value.
```javascript
printList() {
    while (this.head) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
```
# Conclusion
The best way to understand data structures is through practice. Now that you have understood the basics, try writing the code snippets or look for leetcode problems and solve.