/*
    #Stack
    -The stack data structure is a sequential collection of elements
    that follows the principle of Last In First Out (LIFO)
    -The last element inserted into the stack is first element to be removed
    -A stackof plates. the last plate placed on top of the stack is also the
    first plate removed from the stack
    -Stack is an abstract data type.it is defined by its behavior rather than
    being a mathematical model
    -The stack data structure supports two main operations
    .. Push .which adds an element to the collection
    .. Pop ,which removes the most recently added element from the collection

    Stack Usage
        Browser history tracking
        Undo operation when typing
        Expression conversions
        Call stack in Javascript runtime
*/
/*
Stack Implementaion
    Push(element) add an element to the top of the stack
    pop() remove the top most element from the stack
    peek() get the value of the top element without removing it 
    isEmpty() - check if the stack is empty
    size() get the number of elements in the stack
    print() visualize the  elements in the stack
*/
class Stack {
    constructor(){
        this.items =[]
    }
    // push operation
    push(element){
        this.items.push(element)
    }
    // pop operation
    pop(){
        return this.items.pop()
    }
    //peek operation
    peek(){
        return this.items[this.items.length - 1]
    }
    // isEmpty operation
    isEmpty(){
        return this.items.length === 0
    }
    // size operation
    size(){
        return this.items.length
    }
    // print operation
    print(){
        console.log(this.items.toString())
    }
}
const stack = new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.peek())
stack.pop()
stack.print()
console.log(stack.size())