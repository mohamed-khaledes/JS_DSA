/*
Linked List
    A linked list is a linear data structure that includes a series of 
    connected nodes Each node consists of a data value and a pointer that
    points to the next node
    
    -The list elements can be easily inserted or removed without reallocation
    or reorganization of the entire structure

    -Random access of elements is not feasible and accessing an element has
    linear time complixity

    The linked list data sturcture supports three main operations
    - Insertion - to add an element at the begining, end or at a given index in the list
    - Deletion - to remove an item given its index or value
    - Search - to find an element given its value

    Linked list usage
        All Applications of both stacks  and queues are applications of 
        linked list 
        -image viewer
*/
// Constructor => It is a function that contains the object's schema that can be executed more than once

// Node Class
class Node {
    // Constructor
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Linked list class
class LinkedList{
    // Constructor
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // isEmpty method
    isEmpty(){
        return this.size === 0;
    }
    // getSize
    getSize(){
        return this.size;
    }
    // insert an element to the begining of the linked list 
    //O(1) time complexity
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next= this.head;
            this.head = node
        }
        this.size++
    }
    // insert an element to the end of the linked list
    //O(n) time complexity
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++;
    }
    //insert an element in the the given index
    insert(value,index){
        //if the index is invalid index
        if(index < 0 || index > this.size){
            console.log("invalid index")
        }else if(index == 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    // remove from given index
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i =0; i<index -1 ; i++){
                prev = prev.next
            }
            removedNode = prev.next;
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode.value;
    }
    // remove an element using given value
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--;
            return value
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removedValue = prev.next
                prev.next = removedValue.next
                this.size--;
                return value
            }
            return null
        }
    }
    // search in the linked list
    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
                curr = curr.next;
                i++;
        }
        return -1;
    }
    // reverse linked list
    reverse(){
        let prev =null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev
    }
    // print the element of the linked list
    //time complexity O(n) linear
    print(){
        if(this.isEmpty()){
            console.log("The list is empty")
        }else{
            let curr = this.head
            let valuesList = '';
            while(curr){
                valuesList +=`${curr.value} `
                curr = curr.next
            }
            console.log(valuesList)
        }
    }
}

const list = new LinkedList()
console.log("list is empty? "+ list.isEmpty())
console.log("list size is: "+ list.getSize())
list.print()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
list.print()
list.append(40)
list.append(50)
list.append(60)
list.print()
console.log("list size is: "+ list.getSize())
list.insert(70,2)
list.print()
console.log(list.removeFrom(10))
console.log(list.removeFrom(-1))
console.log(list.removeFrom(2))
list.print()
console.log(list.removeValue(50))
list.print()
console.log(list.getSize())
console.log(list.search(40))
console.log(list.search(80))
list.reverse()
list.print()