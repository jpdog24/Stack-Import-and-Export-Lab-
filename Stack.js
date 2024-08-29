



// Stack implementation in JavaScript
export class Stack {
    constructor() {
        this.items = [];
    }
    // Add a new element to the stack
    push(element) { 
        this.items.push(element);
        // Your code here
    }
    // Remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
        // Your code here
    }
    // View the top element in the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
        // Your code here
    }
    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
        // Your code here
    }
    // Get the size of the stack
    size() {
        return this.items.length;
        // Your code here
    }
    // Clear the stack
    clear() {
        this.items = [];
        // Your code here
    }

    
}



