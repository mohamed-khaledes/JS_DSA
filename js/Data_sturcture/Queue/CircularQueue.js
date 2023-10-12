/*
Circular Queue
    -the size of the queue if fixed and a single block of memory is used as
    if the first element is connected to the last element
    
    -also referred to as circular buffer or ring buffer and follows the FIFO
    principle

    -a circular queue will reuse the empty block created during the dequeue
    operation 

    -when working with queues of fixed maximum size, a circular queue is a great
    implementation choice

    -the circular queue data structure supports two main operations

    ..Enqueue, which adds an element to the rear/tail of the collection
    ..Dequeue, which removes and element from  the front/head of the collection
    
    Circular queue Usage
    -clock
    -streaming data
    -traffic lights

    Circular Queue Implementation
        -enqueue(element) - add an element to the queue
        -dequeue(element) - remove an element to the queue
        -peek() -get the value of the element at the front of the queue
        -isFull() -check if the queue is full
        -isEmpty() -check if the queue is empty
        -size() - get the number of elements is the queue
        -print() - visualize the elements is the queue
*/

class CircularQueue{
    constructor(capacity){
        this.capacity = capacity;
        this.items = new Array(capacity)
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isFull(){
        return this.currentLength === this.capacity;
    }
    isEmpty(){
        return this.currentLength ===0
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength +=1
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }
    dnqueue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -=1;
        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }else{
            let i;
            let str=""; 
            for(i=this.front; i!==this.rear; i= (i+1) % this.capacity){
                str+= this.items[i] + " "
            }
            str+=this.items[i]
            console.log(str)
        }
    }
}
const circularQueue = new CircularQueue(5)

console.log(circularQueue.isEmpty())
circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
circularQueue.enqueue(40)
circularQueue.enqueue(50)
console.log(circularQueue.isFull())
circularQueue.print()
console.log(circularQueue.peek())

circularQueue.dnqueue()
circularQueue.print()
console.log(circularQueue.peek())