// this is linked list width tail

// node 
class Node {
    constructor(value){
        this.value =value;
        this.next = null;
    }
}

// linked list
export class LinkedList{
    constructor(){
        this.head =null;
        this.tail =null;
        this.size =0;
    }
    // isEmpty method
    isEmpty(){
        return this.size === 0;
    }
    // getSize
    getSize(){
        return this.size;
    }
    // prepend 
    //time complexity O(1) constant
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head =node
            this.tail =node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++;
    }
    //append
    //time complexity O(1) constant
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head =node
            this.tail =node
        }else{
            this.tail.next =node
            this.tail = node
        }
        this.size++;
    }
    // Remove from front
    //time complexity O(1) constant
    RemoveFromFront(){
        if(this.isEmpty()){
            return null
        }
        const RemovedValue = this.head.value
        this.head = this.head.next
        this.size--;
        return RemovedValue
    }
    // Remove from end
    //time complexity O(n) linear
    RemoveFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const RemovedValue = this.tail
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            this.tail = prev
            prev.next = null
        }
        this.size--;
        return RemovedValue;
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
console.log("Is this list empty " +list.isEmpty())
console.log("list size " +list.getSize())
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.getSize()
list.RemoveFromFront()
list.print()
console.log("list size "+list.getSize())
list.RemoveFromEnd()
list.print()
console.log("list size "+list.getSize())