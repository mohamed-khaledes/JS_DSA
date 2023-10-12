import LinkedList  from "../linked_list/llWithTail";

class LinkedListQueue{
    constructor(){
        this.list = LinkedList;
    }
    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        return this.list.RemoveFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}

const llQueue  = new LinkedListQueue;

console.log("Is queue empty " +llStack.isEmpty())
console.log("queue size is " +llStack.getSize() )
