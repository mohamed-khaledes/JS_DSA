/*
    # Queue
    -The queue data structure is a sequential collection of elements that follows the 
    principle of First In First Out (FIFO)
    -The first element inserted into the queue is first element to be removed
    -A queue of people. People enter the queue at one end (rear/tail) and leave the
    queue from the other end  (front/end)
    -Queue is an abstract data type . it is defined by is behavior its rather than being
    a mathematical model 
    -The Queue data structure supports two main operations
        --Enqueue which adds an elements to the rear/tail of the collection
        --Dequeue which removes an element from the front/head of the collection
    ## Queue Usage
        -Printers
        -CPU task scheduling
        -Callback queue in Javascript runtime
    
    ## Queue Implementation
        -enqueue(element) - add an element to the queue
        -dequeue(element) - remove an element to the queue
        -peek() -get the value of the element at the front of the queue
        -isEmpty() -check if the queue is empty
        -size() - get the number of elements is the queue
        -print() - visualize the elements is the queue
*/

// class Queue {
//     constructor(items){
//         this.items = []
//     }
//     // enqueue method
//     enqueue(element){
//         this.items.push(element)
//     }
//     // dequeue method
//     dequeue(){
//         return this.items.shift()
//     }
//     // isEmpty
//     isEmpty(){
//         return this.items.length === 0
//     }
//     // peek 
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }else{
//             return null
//         }
//     }
//     // size
//     size(){
//         return this.items.length
//     }
//     // print 
//     print(){
//         console.log(this.items.toString())
//     }
// }
// const queue = new Queue
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// console.log(queue.size())
// console.log(queue.peek())
// queue.dequeue()
// queue.print()
// console.log(queue.size())

// Queue Implementation Optimised

class Queue {
        constructor(){
            this.items ={}
            this.rear = 0;
            this.front =0;
        }
    //enqueue 
    enqueue(element){
        this.items[this.rear] = element
        this.rear++;
    }
    // dequeue
    dequeue(){
        const item = this.items[this.front] 
        delete this.items[this.front]
        this.front++
        return item
    }
    // isEmpty
    isEmpty(){
        return this.rear - this.front ===0
    }
    //peek 
    peek(){
        return this.items[this.front]
    }
    // size
    size(){
        return this.rear - this.front
    }
    // print 
    print(){
        console.log(this.items)
    }
}
const queue = new Queue
console.log(queue.isEmpty())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
console.log(queue.size())
console.log(queue.peek())
/////
// queue.dequeue()
queue.print()
console.log(queue.size())
console.log(queue.peek())
