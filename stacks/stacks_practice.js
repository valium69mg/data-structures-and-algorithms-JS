/* 
STACKS PRACTICE 
CREATING OUR OWN STACKS
*/

class Stack {
    // CONSTRUCTOR OF THE CLASS 
    constructor() {
        this.count = 0;
        this.storage = [];
    }
    // PUTS A VALUE AT THE END OF THE STACK 
    push(value){
        this.storage[this.count] = value;
        this.count++;
    }
    // ELIMINATES THE LAST VALUE OF THE STACK
    pop(value) {
        if (this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    // RETURNS THE SIZE OF THE STACK
    size(){
        return this.count;
    }

    // RETURNS LAST OBJECT OF THE STACK
    peek(){
        return this.storage[this.count-1];
    }
    // PRINTS THE STACKS ON THE CONSOLE
    printStack() {
        console.log(this.storage);
    }
}

var my_stack = new Stack();
