/* QUEUES */

class Queue {
    constructor(){
        this.collection = [];
    }
    // PRINTS IN THE CONSOLE THE QUEUE
    print() {
        console.log(this.collection);
    }
    // ENQUEUE ADDS AN ELEMENT AT THE END OF THE QUEUE AND RETURN CURRENT QUEUE SIZE
    enqueue(element){
        return this.collection.push(element)
    }
    // DEQUEUE REMOVES THE FIRST ITEM (NEXT ITEM) ON THE QUEUE AND RETURNS IT
    dequeue(){
        return this.collection.shift()
    }
    // FRONT RETURNS THE FIRST ELEMENT (NEXT ITEM) AT THE QUEUE 
    front(){
        return this.collection[0];
    }
    // SIZE RETURNS THE SIZE OF THE QUEUE
    size(){
        return this.collection.length;
    }
    // isEmpty FUNCTION EVALUATES IF THE QUEUE IS EMPTY
    isEmpty(){
        if (this.collection.length === 0){
            return true;
        }
        return false;
    }
}

var my_queue = new Queue();
console.log("Print method: ");
my_queue.print();
console.log("isEmpty method: ");
if (my_queue.isEmpty() === true){
    console.log("Your queue is empty.");
}
console.log("enqueue method:");
my_queue.enqueue("I Wonder");
my_queue.print();
console.log("enqueue method:");
my_queue.enqueue("Through the Wire");
my_queue.enqueue("N***** in Paris");
my_queue.enqueue("Burn");
my_queue.print();
console.log("dequeue method: ");
my_queue.dequeue();
my_queue.print();
console.log("Size method:");
console.log(my_queue.size());
console.log("Front method:");
console.log(my_queue.front());
