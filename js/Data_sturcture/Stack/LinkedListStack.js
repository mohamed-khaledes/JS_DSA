import LinkedList  from "../linked_list/llWithTail";

class LinkedListStack{
    constructor(){
        this.list = LinkedList;
    }
    push(value){
        this.list.prepend(value)
    }
    pop(){
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

const llStack  = new LinkedListStack;

console.log("Is stack empty " +llStack.isEmpty())
console.log("stack size is " +llStack.getSize() )
