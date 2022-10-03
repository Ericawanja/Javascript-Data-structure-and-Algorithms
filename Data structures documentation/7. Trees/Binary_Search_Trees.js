/**
 * This file contains basic binary trees operations search as 
 */

class Node {
    constructor(val){
        this.data = val ;
        this.left = null;
        this.right = null
    } 

}

 class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        var newNode = new Node(data);
        if(!this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }

    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left == null) node.left = newNode;
            else{ this.insertNode(node.left, newNode)}
        }else{
            if(node.right === null) node.right = newNode;
            else{
                this.insertNode(node.right, newNode)
            }
        }
    }
    remove(data){
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key){
        if(node === null) return null;
        else if(key < node.data){
            node.left = this.removeNode(node.left, key)
            return node;
        }else if(key>node.data){
            node.right = this.removeNode(node.right, key)
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }

        }
    }
 }

const depthFirstValues = (root) =>{
    const result = []
    const stack =[root];
    while (stack.length > 0){
        const current = stack.pop()
        result[current.val];

        if(current.right ) stack.push(current.right)
        if (current.left) stack.push(current.left);
        
    }
    return result;
}
depthFirstValues(a)